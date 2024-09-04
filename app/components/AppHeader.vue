<script setup>
</script>

<template>
  <header class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
      <a class="navbar-brand" href="#">My Application</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div id="navbarSupportedContent" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <!-- Use ms-auto to push the menu items to the right -->
          <li class="nav-item">
            <NuxtLink class="nav-link active" aria-current="page" href="/">
              Home
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" href="/basic">
              Basic Example
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
