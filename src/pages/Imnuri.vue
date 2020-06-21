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
        {"id":"1","name": "Imn: Laudă pe Domnul, o, suflete", "versuri": [{"1":"Imn: Laudă pe Domnul, o, suflete,","2":"Laudă pe Domnul ce ţine","3":"Laudă pe Domnul,","4":"Lăudaţi toţi pe Domnul"}]},
        {"id":"2","name": "Imn: Doamne sfinte, Te mărim", "versuri": [{"1":"Imn: Doamne sfinte, Te mărim,","2":"Cetele cereşti în cor","3":"Pe pământ, necontenit,","4":"Şi având al Tău Cuvânt"}]},
        {"id":"3","name": "Imn: La picioare-Ţi, o, Isuse", "versuri": [{"1":"Imn: La picioare-Ţi, o, Isuse,","2":"Ah, vorbeşte-mi, căci doreşte","3":"Tot ce-i rău acum să piară,","4":"Ah, vorbeşte-mi, căci doreşte"}]},
      ]
    }
  }
}
</script>
