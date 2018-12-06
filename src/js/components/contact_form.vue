<template>
  <div>
    <ValidationProvider rules="required|email">
      <div slot-scope="{ errors }">
        <form class="offset-6 col-5"> <!-- Form -->
            <label for="name">Name</label>
                <input  type="text" name="name" id="name" value=""><br> <!--Name input-->
            <label for="email">Email</label>
                <input v-model="email" data-vv-as="Email" type="email" name="email" id="email" value=""><br> <!--Email input-->
            <label for="message">Hey  {{email}}, what's your message?</label>
                <textarea name="message" id="message" placeholder=""></textarea><br><br> <!--Message input-->
            <input class="button col-12" type="submit" value="Send">
            <p class="col-12">{{ errors[0] }}</p> <!--Display erros with form -->
          </form> <!--End form-->
      </div>
    </ValidationProvider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  data: () => ({
    value: ''
  }),
  components: {
    ValidationProvider
  },
  mounted: function() {
    debugger;
    console.log('running');
  }
}
</script>