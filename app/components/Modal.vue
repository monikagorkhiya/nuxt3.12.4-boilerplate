<script setup>
import { onMounted, watch } from 'vue'
import { useNuxtApp } from '#app'

const props = defineProps({
  visible: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['update:visible'])

const nuxtApp = useNuxtApp()
let modal

onMounted(() => {
  const modalElement = document.getElementById('myModal')
  modal = new nuxtApp.$bs.Modal(modalElement)

  // Show or hide modal based on the initial prop value
  if (props.visible) {
    modal.show()
  }
})

// Watch for changes in the visible prop
watch(
  () => props.visible,
  (newValue) => {
    if (newValue) {
      modal.show()
    }
    else {
      modal.hide()
    }
  },
)

// Method to handle modal close
function closeModal() {
  emit('update:visible', false)
}

// Optional: Save changes method
function saveChanges() {
  // Add logic for saving changes if needed
  closeModal() // Optionally close the modal after saving
}
</script>

<template>
  <div
    id="myModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">
            Modal Title
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="closeModal"
          />
        </div>
        <div class="modal-body">
          <slot />
          <!-- Slot for dynamic content -->
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-sm btn-secondary"
            data-bs-dismiss="modal"
            @click="closeModal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="saveChanges">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles for your modal here */
</style>
