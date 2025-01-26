<template>
  <q-page class="flex column bg-white text-primary" v-if="person">
    <!-- Header Banner -->
    <div class="row bg-primary bgSection items-center q-pa-md" style="min-height: 250px">
      <div class="col-12 col-md-3 flex justify-center">
        <q-card flat bordered class="profile-image-card">
          <q-img
            :src="person.image ? person.image : ''"
            :ratio="4/5"
            class="rounded-borders"
            style="width: 150px"
          >
            <template v-slot:error>
              <div class="absolute-full flex flex-center text-grey-7">
                <q-icon name="person" size="50px" />
              </div>
            </template>
          </q-img>
        </q-card>
      </div>
      <div class="col-12 col-md-9 q-pl-md-lg text-white">
        <h1 class="q-mt-md q-mt-md-none">{{ person.name }}</h1>
        <div class="text-h5 text-weight-bold">{{ person.title }}</div>
        <div class="text-h6">{{ person.role }}</div>
      </div>
    </div>

    <div class="margins q-pa-md">
      <!-- Info Section -->
      <div class="col-12">
        <!-- Contact Information -->
        <q-card flat bordered class="q-mt-md">
          <q-card-section>
            <div class="text-h6 text-weight-bold text-primary">Contact Information</div>
            <div class="q-mt-sm">
              <div class="q-py-sm"><strong>Department:</strong> {{ person.contact.department }}</div>
              <div class="q-py-sm"><strong>Institution:</strong> {{ person.contact.institution }}</div>
              <div class="q-py-sm"><strong>Office:</strong> Room {{ person.contact.room }}, {{ person.contact.building
                }}
              </div>
              <div class="q-py-sm"><strong>Address:</strong> {{ person.contact.address }}, {{ person.contact.location }}
              </div>
              <div class="q-py-sm"><strong>Tel:</strong> {{ person.contact.telephone }}</div>
              <div class="q-py-sm"><strong>Fax:</strong> {{ person.contact.fax }}</div>
              <div class="q-py-sm row items-center">
                <strong>Email:</strong>
                <span class="row items-center q-ml-sm">
                  {{ person.contact.email }}
                </span>
                <img
                  src="~assets/email.png"
                  style="max-height: 12px"
                  class="q-ml-xs"
                >
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <!-- Education Section -->
      <div class="row q-mt-lg">
        <div class="col-12">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6 text-weight-bold text-primary">Education</div>
              <q-timeline color="primary" class="q-mt-sm">
                <q-timeline-entry v-for="(edu, index) in person.education" :key="index"
                  :title="edu.degree + ' in ' + edu.field" :subtitle="edu.institution + ', ' + edu.location">
                  <div>{{ edu.period }}</div>
                </q-timeline-entry>
              </q-timeline>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Research Interests -->
      <div class="row q-mt-lg">
        <div class="col-12">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6 text-weight-bold text-primary">Research Interests</div>
              <q-list class="q-mt-sm">
                <q-item v-for="(interest, index) in person.research.interests" :key="index">
                  <q-item-section>
                    <q-item-label>{{ interest }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <!-- Publications -->
      <div class="row q-mt-lg q-mb-xl">
        <div class="col-12">
          <q-card flat bordered>
            <q-card-section>
              <div class="text-h6 text-weight-bold text-primary">Selected Publications</div>
              <div v-for="(pub, index) in person.research.publications" :key="index" class="q-my-md publication-item">
                <div class="text-weight-medium">{{ pub.title }}</div>
                <div class="text-grey-8">{{ pub.authors.join(', ') }}</div>
                <div class="text-grey-7 row items-center">
                  <span>{{ pub.venue }}, {{ pub.year }}</span>
                  <q-btn v-if="pub.doi" flat dense color="primary" class="q-ml-sm" :href="`https://doi.org/${pub.doi}`"
                    target="_blank" label="DOI" />
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <Footer />
  </q-page>
</template>

<script setup>
import { ref, onMounted, onBeforeMount} from 'vue'
import { useRoute } from 'vue-router'
// import leandroAcosta from 'src/data/people/individuals/leandroAcosta.js'
import Footer from 'components/Footer.vue'

const person = ref(null)

onBeforeMount(async () => {
    try {
      // Get the person parameter from the route
      const personName = useRoute().params.person


      // Dynamically import the person data file
      const personModule = await import(`src/data/people/individuals/${personName}.js`)
      console.log('personModule')
      console.log(personModule)
      person.value = personModule.default
    } catch (error) {
      console.error('Error loading person data:', error)
      // Optionally redirect to 404 page if person data not found
      // this.$router.push('/404')
    }
  })
</script>

<style scoped>
.margins {
  max-width: 1500px;
  margin: auto;
}

.publication-item {
  padding: 12px 0;
  border-bottom: 1px solid #e0e0e0;
}

.publication-item:last-child {
  border-bottom: none;
}

.profile-image-card {
  max-width: 150px;
  width: 100%;
}
</style>
