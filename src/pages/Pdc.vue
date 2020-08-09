<template>
  <q-page padding class="row">
    <div style="width: 100%; max-width: auto;">
      <q-infinite-scroll>

          <q-item clickable v-ripple v-for="(item, index) in items" :key="index" class="caption">
            <q-item-section>
              <q-item-label>{{ index + 1 }}. {{ item.name }}</q-item-label>
            </q-item-section>
          </q-item>

      </q-infinite-scroll>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { id: '1', name: 'Laudă pe Domnul, o, suflete', path: 'assets/pdc/1.txt' },
        { id: '2', name: 'Doamne sfinte, Te mărim', path: 'assets/pdc/1.txt' },
        { id: '3', name: 'La picioare-Ţi, o, Isuse', path: 'assets/pdc/1.txt' }
      ]
    }
  },
  methods: {
  }
}
</script>
