import { auth } from '@/Firebase/firebase.config';
import { createAsyncThunk, createSlice,nanoid  } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

export const fetchCurrentUser = createAsyncThunk(
    "auth/checkUSerSignIn",
    async () => {
      return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            console.log("onAuthStateChanged", user);
            
            resolve(user);
          } else {
            resolve(false);
          }
        });
        unsubscribe();
      });
    }
  );


export const doSignup = createAsyncThunk("auth/signup", async (item) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        item.email,
        item.password,
      );

      console.log("signup user", user);
      return user;
    } catch (error) {
      console.log("error", error);
    }
  });

  export const doSignin = createAsyncThunk("auth/login", async (item) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        item.email,
        item.password
      );
      console.log("login user", user);
      return user;
    } catch (error) {
      console.log("error", error);
    }
  });

const authSlice = createSlice({
    name: "auth",
    initialState: {  user: null,
        isLoggedIn: false,
        error: null,
        userName: "",
        singupUser: {},
        currentUserRequestLoader: true,},
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(doSignup.fulfilled, (state, action) => {
            let newState: any = {
                ... state,
                signUp: action.payload,
            }
            
            
            console.log("newState after signup", newState);

            return newState;
        })

        builder.addCase(doSignin.fulfilled, (state, action) => {
            if (action.payload?.user) {
              let newState: any = {
                ...state,
                user: action.payload?.user,
                isLoggedIn: true
              };
              console.log("newState after login", newState);
      
              return newState;
            }
      
            return {
              ...state
            };
          });

          builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
            console.log("newState after current user start", action);
            
          if (action.payload) {
            let newState: any = {
              ...state,
              user: action.payload?.user,
              isLoggedIn: true,
              currentUserRequestLoader: false
            };
            console.log("newState after current user", newState);
    
            return newState;
          }
    
          return {
            ...state,
            currentUserRequestLoader: false
          };
        });
      },
    }
)



export default authSlice.reducer