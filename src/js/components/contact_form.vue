<template>
<form class="offset-6 col-4">
    <p> <!--Error Handling for Name input-->
        Name: <input v-model='name' :class="{ error: errors.has('name') }" type="text" v-validate="'required'" name="name">
        <span v-show="errors.has('name')" class="error">{{ errors.first('name') }}</span> <!--Show name error-->
    </p>
    <p><!--Error Handling for email input-->
        Email: <input :class="{ error: errors.has('email') }" type="text" v-validate="'required|email'" name="email">
        <span v-show="errors.has('email')" class="error">{{ errors.first('email') }}</span><!--Show email error-->
    </p>
    <p><!--Error Handling for message input-->
        Hey {{name}}, what's your Message?: <textarea :class="{ error: errors.has('message') }" type="textarea" v-validate="'required|message'" name="message"></textarea>
        <span v-show="errors.has('message')" class="error">{{ errors.first('message') }}</span><!--Show message error-->
    </p>

    <p><!--Submit Button-->
        <button type="submit">Submit</button><!--Submit form button-->
    </p>

</form>


</template>

