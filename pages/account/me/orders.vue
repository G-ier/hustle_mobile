<template>
  <div class="orders">
      <h1 class="qs secondary--text s30 mb-10">Blerjet tuaja</h1>
      <b-table
            :data="data"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="paginationPosition"
            :default-sort-direction="defaultSortDirection"
            :pagination-rounded="isPaginationRounded"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            default-sort="user.first_name"
            aria-next-label="Next page"
            aria-previous-label="Previous page"
            aria-page-label="Page"
            aria-current-label="Current page">

            <b-table-column field="id" label="ID" width="40" v-slot="props">
                {{ props.row.id }}
            </b-table-column>

            <b-table-column field="emri" label="Shitesi" v-slot="props">
                {{ props.row.emri }}
            </b-table-column>

            <b-table-column field="produkti" label="Produkti" v-slot="props">
                {{ props.row.produkti }}
            </b-table-column>

            <b-table-column field="sasia" label="Sasia" sortable numeric v-slot="props">
                {{ props.row.sasia }}
            </b-table-column>

            <b-table-column field="sasia" label="Sasia" sortable numeric v-slot="props">
                {{ props.row.sasia }}
            </b-table-column>

        </b-table>
  </div>
</template>

<script>
    import * as firebase from 'firebase/app'
    import 'firebase/firestore'
    import 'firebase/storage'
    import Cookie from 'js-cookie';
    export default {
        async asyncData({store}){
            const data = await firebase.firestore().collection('orders').where("payee_email", "==", store.state.users.user.email).get();
            const data2 = data.docs.map(doc => doc.data());
            const dataProcessed = data2.map((doc) => {
                return {
                    "id": doc.orderId,
                    "emri": doc.onto,
                    "produkti": doc.orders.item,
                    "sasia": doc.orders.quantity,
                    "totali": doc.orders.price
                }
            })

            return {
                data: dataProcessed
            }
        },
        data() {
            return {
                isPaginated: true,
                isPaginationSimple: false,
                isPaginationRounded: false,
                paginationPosition: 'bottom',
                defaultSortDirection: 'asc',
                sortIcon: 'arrow-up',
                sortIconSize: 'is-small',
                currentPage: 1,
                perPage: 5
            }
        }
    }
</script>

<style>
.orders{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 65vh;
    padding: 25px 0 25px 0;
    background-color: white;
}
</style>