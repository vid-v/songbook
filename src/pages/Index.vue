<template>
  <div id="q-app" :style-fn="myStyle">
    <div class="q-pa-md">
      <q-responsive :ratio="1" class="col">

        <q-carousel
          v-model="slide"
          swipeable
          animated
          :padding="padding"
          :vertical="vertical"
          :arrows="arrows"
          :navigation="navigation"
          :navigation-position="navPos"
          class="bg-grey text-white rounded-borders"
          :fullscreen.sync="fullscreen"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <div class="q-mt-md text-center" style="font-size: 2em">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="column no-wrap flex-center" style="font-size: 2em">
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="layers" class="column no-wrap flex-center" style="font-size: 2em">
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="map" class="column no-wrap flex-center" style="font-size: 2em">
            <div class="q-mt-md text-center">
              {{ lorem }}
            </div>
          </q-carousel-slide>
        <template v-slot:control>
          <q-carousel-control
            position="top-right"
            :offset="[18, 18]"
          >
            <q-btn
              push round dense color="bg-grey" text-color="white"
              :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
              @click="fullscreen = !fullscreen"
            />
          </q-carousel-control>
        </template>
        </q-carousel>
      </q-responsive>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fullscreen: false,
      padding: true,
      vertical: false,
      arrows: true,
      navigation: true,
      navPos: 'bottom',
      navigationPositions: [
        { value: 'top', label: 'top' },
        { value: 'right', label: 'right' },
        { value: 'bottom', label: 'bottom (default)' },
        { value: 'left', label: 'left' }
      ],
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  },
  watch: {
    vertical (val) {
      this.navPos = val === true
        ? 'right'
        : 'bottom'
    }
  }
}
</script>

myStyle (offset) {
  const size = `calc(100vh - ${offset}px)`
  return {
    minHeight: size,
    height: size,
    font-size: 40px
  }
}
