export default function ({store, route, redirect}) {
    const user = store.state.users.user;
    const role = store.state.users.role;
    const cart = store.state.users.cart;
    const noCart = /^\/checkout\/?$/;
    const blocked = /^\/account\/me\/?$/;
    // const blockedC = /^\/creator\/*$/;
    const blockedAdmin = /^\/account\/drejtuesi\/?$/;
    const afterAdminLogin = /^\/account\/drejtuesi\/users\/?|\/account\/drejtuesi\/manage\/?|\/account\/drejtuesi\/?|\/account\/drejtuesi\/deals\/?$/;
    const blockedAfterLogIn = /^\/account\/?|\/account\/register\/?$/;
    const blockedAfterLogIn2 = /^\/account\/register\/?$/;
    // const blockedAfterLogInC = /^\/creator\/login$/;

    if(route.path.match(noCart) && (cart == null || cart.length == 0)){
        return redirect('/cancel');
    }

    if(!user && route.path.match(blocked)){
        return redirect('/account');
    }
    else if( !user && route.path.match(blockedAdmin)){
        return redirect('/account');
    }
    else if(user && role == "admin" && route.path.match(afterAdminLogin)){
        console.log("in");
    }
    else if( user && role == "admin" && route.path.match(blockedAfterLogIn)){
        console.log("blocked1");
        return redirect('/account/drejtuesi');
    }
    else if ( user && role == "admin" && route.path.match(blocked)){
        console.log("blocked2");
        return redirect('/account/drejtuesi');
    }
    else if (user && role != "admin" && route.path.match(blockedAfterLogIn2)){
        console.log("blocked3");
        return redirect('/account/me');
    } 
    else if(user && role != "admin" && route.path.match(blockedAdmin)){
        console.log("blocked4");
        return redirect('/account/me');
    }
    /*  
    else if(!user && route.path.match(blockedC)){
        return redirect('/creator/login');
    }
    else if( user && route.path.match(blockedAfterLogInC) ){
        if(role == "creator"){
            return redirect('/creator/');
        } else {
            return redirect('/');
        }
    }
    */
}