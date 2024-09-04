<script setup>
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
// console.log(appConfig.theme)

/* Custom Layout Example */
definePageMeta({
  layout: 'custom',
  middleware: ['auth'],
})

/* Server api example */
const { data } = await useFetch('/api/healthz')

/* Composable Example */
// Get all users with composables example
const users = await useFetchWithCache('/api/users')

/* Composable Example */
// Destructure to get the theme state from the composable
const { theme } = useCommon()
function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light' // Toggle the theme
}

/* Bootstrap modal Example */
const isModalVisible = ref(false)
function showModal() {
  if (isModalVisible.value) {
    isModalVisible.value = false
  }
  else {
    isModalVisible.value = true
  }
}
</script>

<template>
  <div class="container pt-5 ">
    <div class="row">
      <div class="col-sm-12 mb-3">
        <h1 class="text-center">
          Custom Layout Page
        </h1>
      </div>
      <div class="col-sm-6 mb-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              How to use Utils?
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Example
            </h6>
            <p class="card-text">
              {{ formatNumber(1234) }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 mb-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              How to use Server Api?
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Example
            </h6>
            <p class="card-text">
              {{ data }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 mb-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              How to use Content Module?
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Example
            </h6>
            <!-- ContentDoc returns content for `$route.path` by default or you can pass a `path` prop -->
            <ContentDoc />
          </div>
        </div>
      </div>
      <div class="col-sm-6 mb-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              How to use Composable with api?
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Example
            </h6>
            <div>
              <ul>
                <li v-for="(user, index) in users" :key="index">
                  <span>({{ user.id }}) {{ user.name }} : {{ user.email }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 mb-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              How to use middleware with Store?
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Example
            </h6>
            <p>Check it middleware and stores folder's code </p>
          </div>
        </div>
      </div>
      <div class="col-sm-6 mb-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              How to use Bootstrap JS  Navbar?
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Example
            </h6>
            <Navbar />
          </div>
        </div>
      </div>
      <div class="col-sm-6 mb-2">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">
              How to use Bootstrap JS component?
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Example
            </h6>
            <button class="btn btn-success" @click="showModal">
              Open Modal
            </button>

            <Modal
              :visible="isModalVisible"
              @update:visible="isModalVisible = $event"
            />
          </div>
        </div>
      </div>

      <div class="col-sm-6 mb-2">
        <div class="card" :class="theme">
          <div class="card-body">
            <h5 class="card-title">
              How to use Composable static?
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">
              Example
            </h6>
            <div>
              <button class="btn btn-primary" @click="toggleTheme()">
                Switch to {{ theme === "light" ? "Dark" : "Light" }} Mode
              </button>
              <p class="pt-2">
                Current Theme: {{ theme }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
