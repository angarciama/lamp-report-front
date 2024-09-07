<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <label for="to">To:</label>
      <input v-model="emailData.to" id="to" type="email" required />

      <label for="subject">Subject:</label>
      <input v-model="emailData.subject" id="subject" type="text" required />

      <label for="text">Text:</label>
      <textarea v-model="emailData.text" id="text" required></textarea>

      <button type="submit">Send Email</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SendEmailRequestModel from '~/api/models/SendEmailRequestModel'
import {sendEmailController} from "~/api/controllers/sendEmail.controller";

const emailData = ref({
  to: '',
  subject: '',
  text: ''
})

const handleSubmit = async () => {
  try {
    // Crear el objeto SendEmailRequestModel
    const emailRequest = new SendEmailRequestModel(emailData.value.to, emailData.value.subject, emailData.value.text)

    // Llamar al controlador de envío de correo
    const response = await sendEmailController(emailRequest)

    // Manejar la respuesta
    console.log('Email enviado:', response.message)
  } catch (error) {
    console.error('Error al enviar el correo:', error)
  }
}
</script>