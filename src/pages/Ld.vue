<template>
  <q-page padding class="row">
    <div style="width: 100%; max-width: auto;">
      <q-infinite-scroll :handler="refresher">

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
        {"id":"1","name": "Doamne mare Te slavim", "versuri": [{"1":"Doamne mare Te slavim,","2":"Orice glas de heruvimi,","3":"Al apostolilor cor,"}]},
        {"id":"2","name": "Laudat fie Dumnezeu", "versuri": [{"1":"Laudat fie Dumnezeu,"}]},
        {"id":"3","name": "Lauda pe Domnul suflete", "versuri": [{"1":"Lauda pe Domnul suflete,","2":"Laudă-L în zori şi pe-nserat","3":"Duh de viaţă ai primit,","4":"Laudă-L în zori şi pe-nserat", "5":"Domnul te scapă de cel rău,", "6":"Laudă-L în zori şi pe-nserat"}]}
      ]
    }
  },
  methods: {
    refresher (index, done) {
      setTimeout(() => {
        let items = []
        for (let i = 0; i < 7; i++) {
          items.push({})
        }
        this.items = this.items.concat(items)
        done()
      }, 2500)
    }
  }
}
</script>
