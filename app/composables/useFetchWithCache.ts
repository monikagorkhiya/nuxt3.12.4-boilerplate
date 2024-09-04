import { StorageSerializers, useSessionStorage } from '@vueuse/core'

// https://masteringnuxt.com/blog/writing-a-cache-composable-in-nuxt-3

export default async <T>(url: string) => {
  // Use sessionStorage to cache data
  const cached = useSessionStorage<T>(url, null, {
    serializer: StorageSerializers.object,
  })

  if (!cached.value) {
    const { data, error } = await useFetch<T>(url)

    if (error.value) {
      throw createError({
        ...error.value,
        statusMessage: `Could not fetch data from ${url}`,
      })
    }

    // Update the cache
    cached.value = data.value as T
  }
  else {
    console.error(`Getting value from cache for ${url}`)
  }

  return cached
}
