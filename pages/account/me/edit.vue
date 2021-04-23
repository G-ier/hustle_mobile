<template>
  <div class="edit">
      <div class="sets">
            
            <h2 class="classy secondary--text">Your products</h2>
            
        </div>
        <div class="lineM"></div>
        <div class="market">
            <div class="market-inner">
                <div class="sell-container" v-for="prod in prods" :key="prod.name">
                    <div class="sellable">
                        <v-img :aspect-ratio="1/1" class="market-img secondary-bg" :src="prod.details.photo" @click="sendToProduct(prod.spot)"></v-img>
                        <div class="safety">
                            <div class="sellable-desc">
                                <h4 class="sell-title">{{prod.details.name}}</h4>
                                <p class="qs sell-price">{{prod.details.price}}$</p>
                                <div class="func-row">
                                    <v-btn color="secondary" class="rounded-md" small @click="edit(prod.details, prod.spot)">Edit</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            class="r"
            >
            
            <v-card>
                <v-toolbar
                dark
                color="primary"
                >
                <v-btn
                    icon
                    dark
                    @click="close"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Edit your product</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                    dark
                    text
                    @click="upload"
                    >
                    Save
                    </v-btn>
                </v-toolbar-items>
                </v-toolbar>
                <v-list
                three-line
                subheader
                >
                <v-subheader>Product details</v-subheader>
                <v-list-item>
                    <v-list-item-content>
                        <div class="show-details">
                            <p class="qs ">Name: {{this.detailsToEdit.name}}</p>
                            <p class="qs ">Price: {{this.detailsToEdit.price}}</p>
                            <p class="qs ">Desc: {{this.detailsToEdit.desc}}</p>
                            <p class="qs" v-for="detail in detailsToEdit.details" :key="detail">{{detail}}</p>
                        </div>
                    </v-list-item-content>
                </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list
                three-line
                subheader
                >
                <v-subheader>Edit details</v-subheader>
                <v-list-item>
                    <v-list-item-content class="show-details">
                    <v-text-field
                        v-model="detailsToEdit.name"
                        label="New Name"
                        outlined
                        clearable
                        dense
                    ></v-text-field>
                    <v-text-field
                        v-model="detailsToEdit.price"
                        label="New Price"
                        outlined
                        clearable
                        dense
                    ></v-text-field>
                    <v-textarea
                        clearable
                        clear-icon="mdi-close-circle"
                        label="New description"
                        :value="detailsToEdit.desc"
                        color="white"
                        outlined
                    ></v-textarea>
                    <div v-for="info in detailsToEdit.details" :key="info">
                        <v-text-field
                            v-model="detailsToEdit.details[detailsToEdit.details.indexOf(info)]"
                            label="New Price"
                            outlined
                            clearable
                            dense
                        ></v-text-field>
                    </div>
                    <div class="vert">
                        <p class="qs">Fotot</p>
                        <input
                            ref="imageFile"
                            placeholder="Profile photo"
                            accept="image/png, image/jpeg"
                            class="inputFileR"
                            type="file"
                            name="file" 
                            @change.prevent="uploadImageFile($event.target.files)"
                        >
                    </div>
                    <div class="vert" v-for="post in toShow" :key="post.id">
                        <input
                            ref="imageFile"
                            placeholder="Profile photo"
                            accept="image/png, image/jpeg"
                            class="inputFileR"
                            type="file"
                            name="file" 
                            @change.prevent="uploadImageFile1($event.target.files)"
                        >
                    </div>
                    </v-list-item-content>
                </v-list-item>
                
                </v-list>
            </v-card>   
        </v-dialog>
        <v-dialog
        v-model="dialog2"
        max-width="240"
        >
        <v-card color="secondary">
            <v-card-title class="headline qs">
            Edit success!
            </v-card-title>

            <v-card-text class="qs">
            Update successful. A reload may be needed to refresh the data.
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="white"
                text
                @click="dialog2 = false"
            >
                Close
            </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
export default {
    async asyncData({route}){
        const dataE = await firebase.firestore().collection('elektronike').where("details.seller", "==", route.query.name).get();
        const dataFiltered = dataE.docs.map(doc => doc.data());

        
        return{
            prods: dataFiltered
        }
    },
    data(){
        return{
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
            detailsToEdit: {},
            spot: null,
            dialog2: false,
            selectedMeta: null,
            selectedFile: null,
            prodphoto: "",
            toShow: []

        }
    },
    methods: {
        edit: function (prod, spot){
            this.detailsToEdit = prod;
            this.spot = spot;
            this.toShow = prod.details.photos;

            this.dialog = true;
        },
        close: function(){
            this.detailsToEdit = {};
            this.spot = null;

            this.dialog = false;
        },
        save: async function(){
            await firebase.firestore().collection('elektronike').doc(this.spot).update({
                details: {
                    name: this.detailsToEdit.name,
                    price: this.detailsToEdit.price,
                    desc: this.detailsToEdit.desc,
                    details: this.detailsToEdit.details,
                    seller: this.detailsToEdit.seller,
                    sellerPhoto: this.detailsToEdit.sellerPhoto
                }
            });

            this.detailsToEdit = {};
            this.spot = null;

            this.dialog = false;
            this.dialog2 = true;
        },
        uploadImageFile (files) {
            if (!files.length) {
                return
            }
            const filey = files[0]

            if (!filey.type.match('image.*')) {
                alert('Please upload an image.')
                return
            }

            const metadata = {
                contentType: filey.type
            }
            
            this.selectedMeta = metadata;

            this.selectedFile = filey;

            
        },
        uploadImageFile1 (files) {
            if (!files.length) {
                return
            }
            const filey = files[0]

            if (!filey.type.match('image.*')) {
                alert('Please upload an image.')
                return
            }

            const metadata = {
                contentType: filey.type
            }
            
            this.selectedMeta = metadata;

            this.selectedFile = filey;

            const file = this.selectedFile;
            const metadata1 = this.selectedMeta;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            const uploadTask = imageRef.put(file, metadata1).then((snapshot) => {
                // Once the image is uploaded, obtain the download URL, which
                // is the publicly accessible URL of the image.
                return snapshot.ref.getDownloadURL().then((url) => {
                return url
                })
            }).catch((error) => {
                console.error('Error uploading image', error)
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            uploadTask.then( (url) => {
                this.postings.push({
                    src: url,
                    emri: file.name
                });
            })
            
            

            
        },
        upload: async function(){

            // Create a reference to the destination where we're uploading
            // the file.
            const file = this.selectedFile;
            const metadata = this.selectedMeta;
            const storage = firebase.storage()
            const imageRef = storage.ref(`images/${file.name}`)

            const uploadTask = imageRef.put(file, metadata).then((snapshot) => {
                // Once the image is uploaded, obtain the download URL, which
                // is the publicly accessible URL of the image.
                return snapshot.ref.getDownloadURL().then((url) => {
                console.log(url)
                return url
                })
            }).catch((error) => {
                console.error('Error uploading image', error)
            })

            // When the upload ends, set the value of the blog image URL
            // and signal that uploading is done.
            uploadTask.then(async (url) => {
                await firebase.firestore().collection('elektronike').doc(this.spot).update({
                    details: {
                        name: this.detailsToEdit.name,
                        price: this.detailsToEdit.price,
                        desc: this.detailsToEdit.desc,
                        details: this.detailsToEdit.details,
                        seller: this.detailsToEdit.seller,
                        sellerPhoto: this.detailsToEdit.sellerPhoto,
                        photo: url,
                        kategoria: this.detailsToEdit.kategoria
                    }
                });
            })
            
            

            this.prodphoto = null;

            this.dialog = false;
            this.dialog2 = true;
        }
    }
}
</script>

<style>
.r{
    z-index: 999999998989898787979867987;
}
.edit{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100vw;
    min-height: 81vh;
    background-color: white;
}
.sets{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 15px 0 8px 0;
}
.lineM{
    height: 1px;
    width: 90%;
    background-color: #a10517;
    margin-bottom: 15px;
}
.market{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
}
.market-inner{
    width: 100%;
    padding: 0;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-row-gap: 15px;
}
.sell-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 270px;
}
.sell-link{
    width: 100%;
}
.sellable{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    border-radius: 10px;
    overflow: hidden;
}
.market-img{
    width: 100%;
}
.safety{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.sellable-desc{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 90%;
    padding: 10px 0 10px 0;
}
.func-row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.sell-title{
    color: black;
}
.sell-price{
    color: rgb(48, 48, 48);
    padding: 0;
    margin: 0;
}
.show-details{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    color: rgb(214, 214, 214);
}
@media only screen and (min-width: 850px){
    .sets{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 800px;
        padding: 15px 0 8px 0;
    }
    .lineM{
        height: 1px;
        width: 800px;
        background-color: #a10517;
        margin-bottom: 15px;
    }
    .market{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 800px;
    }
    .market-inner{
        width: 100%;
        padding: 0;
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-row-gap: 15px;
    }
    .sell-container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 340px;
        width: 250px;
    }
    .sell-link{
        width: 100%;
    }
    .sellable{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 95%;
        height: 100%;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        border-radius: 10px;
        overflow: hidden;
    }
    .market-img{
        width: 100%;
    }
    .safety{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .sellable-desc{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 90%;
        padding: 10px 0 10px 0;
    }
    .func-row{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sell-title{
        color: black;
    }
    .sell-price{
        color: rgb(48, 48, 48);
        padding: 0;
        margin: 0 0 10px 0;
    }
    .show-details{
        width: 600px;
    }
}    
</style>