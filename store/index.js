import JWTdecode from 'jwt-decode';
import cookieparser from 'cookieparser';

export const actions = {
    nuxtServerInit({commit}, {req}){
        if(process.server && process.static) return;
        if(!req.headers.cookie) return;

        const parsed = cookieparser.parse(req.headers.cookie);
        const accessTokenCookie = parsed.access_token;
        const cartTokenCookie = parsed.cartToken;
        const roleToken = parsed.role_token;

        if(!accessTokenCookie && !cartTokenCookie) {
            return;
        } else if (!accessTokenCookie && cartTokenCookie){

            if(cartTokenCookie){
                commit('users/SET_CART', JSON.parse(cartTokenCookie));
                console.log("done this");
            }
            return;
        } else if(accessTokenCookie && !cartTokenCookie) {
            const decoded = JWTdecode(accessTokenCookie);
        
            if (decoded) {
                commit('users/SET_USER', {
                    uid: decoded.user_id,
                    email: decoded.email
                });
                commit("users/SET_ROLE", roleToken);
            }
        } else {
            commit('users/SET_CART', JSON.parse(cartTokenCookie));

            const decoded = JWTdecode(accessTokenCookie);
        
            if (decoded) {
                commit('users/SET_USER', {
                    uid: decoded.user_id,
                    email: decoded.email
                });
                commit("users/SET_ROLE", roleToken);
            }
        }

        
        
        
    }
}