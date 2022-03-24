import { async } from "@firebase/util";

export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const GET_TASK = 'GET_TASK';
export const CLEAR_TASK = 'CLEAR_TASK';
export const STATUS_TASK = 'STATUS_TASK';
export const ACTIVE_TASK = 'ACTIVE_TASK';
export const COMPLETED_TASK = 'COMPLETED_TASK';

export const state = () => (
    {
        data: []
    }
);

export const getters = {
    task: state => {
      
        return state.data;
    }
}

export const actions = {
    createtask: function ( { commit }, payload ) {
      
        commit( CREATE_TASK, payload );
    },
    updatetask: function ( { commit }, payload ) {
        this.$fire
        .firestore
        .collection("createtodo")
        .doc(payload.id)
        .update({
            title:payload.title,
            description:payload.description
        });
       
     
        commit( UPDATE_TASK, payload );
       
    },
   gettask:  async function ( { commit }, payload ) {
       const data =await this.$fire.firestore
        .collection('createtodo')
       .get().then((data)=>data.docs.map((doc)=>({...doc.data(),id: doc.id})))
      
 
        commit( GET_TASK, data );
       
    },
    deletetask:async function ( { commit }, payload ) {
        
        // var docRef =await this.$fire.firestore.collection("cretetodo").doc("MSoeu6uAKY9Y2CpHKx1v").delete();
      
      const res = await this.$fire
        .firestore
        .collection("createtodo")
        .doc(payload)
        .delete()


        commit( DELETE_TASK, payload );
       
    },
    cleartask: async function ( { commit }, payload ) {
      
        const res = await this.$fire
     
    },  statustask: function ( { commit }, payload ) {
        commit( STATUS_TASK, payload );
       
    },
    activetask:function ( { commit }, payload ) {
        commit( ACTIVE_TASK, payload );
    },
    completedtask:function ( { commit }, payload ) {
        commit( COMPLETED_TASK, payload );
    }
}

export const mutations = {
 async   [ CREATE_TASK ]( state, payload ) {
       
     
         state =await this.$fire.firestore
        .collection('createtodo')
       .add(payload)
      
 
       
    },
   async [ GET_TASK ] ( state, payload ) {
    state.data = payload
        
       
    },
    [ UPDATE_TASK ]( state, payload ) {
      
        let index = state.data.findIndex( item => item.id === payload.id );
        if ( index === -1 ) {
            state.data.push( payload );
        }
    },
    [ STATUS_TASK ]( state, payload ) {
        if(payload.status === "completed")
        payload.status ="Active"
        else{
            payload.status ="completed"
        }
        this.$fire
        .firestore
        .collection("createtodo")
        .doc(payload.id)
        .update({
            status:payload.status
        });
        // let index = state.data.findIndex( item => item.id === payload.id );
        // if ( index === -1 ) {
        //     state.data.push( payload );
        // }
    },
    [ DELETE_TASK ]( state, payload ) {
     
      let index = state.data.findIndex(item => item.id === payload);


      state.data.splice(index, 1);
    },
    [ CLEAR_TASK ]( state, payload ) {
        state.data = []
     


    },
    [ ACTIVE_TASK ]( state, payload ) {
        
     
     
        state.data =  payload.filter((item)=>{
                     return  item.status === "Active"
                  })
     


    },
    [ COMPLETED_TASK ]( state, payload ) {
        
     
     
        state.data =  payload.filter((item)=>{
                     return  item.status === "completed"
                  })
     


    }
}