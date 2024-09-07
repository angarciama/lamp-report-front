<template>
  <div class="email-form-container">
    <form @submit.prevent="handleSubmit" class="email-form">
      <div class="form-group">
        <label for="to">Destinatario:</label>
        <input v-model="emailData.to" id="to" type="email" required class="form-control" />
      </div>

      <div class="form-group">
        <label for="subject">Titulo:</label>
        <input v-model="emailData.subject" id="subject" type="text" required class="form-control" />
      </div>

      <div class="form-group">
        <label for="text">Mensaje:</label>
        <textarea v-model="emailData.text" id="text" required class="form-control textarea-control"></textarea>
      </div>

      <button type="submit" class="submit-button">Send Email</button>
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
    const emailRequest = new SendEmailRequestModel(emailData.value.to, emailData.value.subject, emailData.value.text)
    const response = await sendEmailController(emailRequest)
    console.log('Email enviado:', response.message)
  } catch (error) {
    console.error('Error al enviar el correo:', error)
  }
}
</script>

<style scoped>
.email-form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f7f7f7;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.email-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.textarea-control {
  height: 150px;
  resize: none;
}

.submit-button {
  padding: 12px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>