<template>
    <div
         class="modal fade"
         :id="'updateUser'+ user.user_id"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
       >
         <div id="updateUser" class="modal-dialog">
           <div class="modal-content">
             <div class="modal-header">
               <h5 class="modal-title" id="exampleModalLabel">
                 Edit
               </h5>
               <button
                 type="button"
                 class="btn-close"
                 data-bs-dismiss="modal"
                 aria-label="Close"
               ></button>
             </div>
             <div class="modal-body">
               <form>
                 <div class="mb-3">
                   <label for="recipient-name" class="col-form-label"
                     >User Name:</label
                   >
                   <input
                     type="text"
                     class="form-control"
                     id="recipient-name"
                     v-model="user.user_name"
                   />
                 </div>
                 <div class="mb-3">
                   <label for="recipient-name" class="col-form-label"
                     >User last name:</label
                   >
                   <input
                     type="text"
                     class="form-control"
                     id="recipient-name"
                     v-model="user.user_lastname"
                   />
                 </div>
                 <div class="mb-3">
                   <label for="recipient-name" class="col-form-label"
                     >Email:</label
                   >
                   <input
                     type="text"
                     class="form-control"
                     id="recipient-name"
                     v-model="user.email"
                     
                   />
                 </div>
                 <div class="mb-3">
                   <label for="recipient-name" class="col-form-label"
                     >User Role:</label
                   >
                   <input
                     type="url"
                     class="form-control"
                     id="recipient-name"
                     v-model="user.user_role"
                   />
                 </div>

               </form>
             </div>
             <div class="modal-footer">
               <button
                 type="button"
                 class="btn btn-secondary"
                 data-bs-dismiss="modal"
               >
                 Cancel
               </button>
               <button type="button" 
               class="btn btn-primary"
               @click="update">
                 Update User
               </button>
             </div>
           </div>
         </div>
       </div>
</template>

<script>
export default {
props:['user'],
methods:{
 update() {
         return this.$store.dispatch("updateUser", {
             id: this.user.user_id,
             user_name: this.user.user_name,
             user_lastname: this.user.user_lastname,
             email: this.user.email,
             user_role: this.user.user_role
         });
     }
}
}
</script>

<style>

</style>