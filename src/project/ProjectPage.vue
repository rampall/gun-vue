
<script setup>
import { useUser, useProject, useMd, useProjectGifts, itemTypes, useNewDiscourseItem } from '#composables';
import { toRef, ref, computed, watch } from 'vue'
import { FormPicture, FormTitle, ProjectFunding, } from '../components'

const emit = defineEmits(['gift', 'user'])

const props = defineProps({
  path: {
    type: String,
    default: ''
  },
})

const { user } = useUser()

const md = useMd()

const { project, updateField, updateCover } = useProject(props.path)

const editable = computed(() => props.path.includes(user.pub))

const editing = ref(false)

const text = ref(project.text)

watch(() => project.text, (t) => {
  text.value = t
})

const { newItem, add } = useNewDiscourseItem()



</script>
<!-- eslint-disable vue/no-v-html -->
<template lang="pug">
.flex.flex-col
  .p-2.relative(:style="{ background: `url(${project.cover}) center`, backgroundColor: project.color, paddingTop: project.cover || project.color ? '120px' : '' }")

    input.absolute.top-4.right-4(
      v-if="editable" 
      type="color" 
      :value="project.color" 
      @input="updateField('color', $event.target.value)"
      )

    form-picture(
      v-if="editable" 
      @update="updateCover($event)"
      )

    form-title(
      :text="project.title" 
      :editable="editable" 
      @update="updateField('title', $event)")

    //- account-badge.absolute.bottom-4.right-4(
      :pub="path.slice(-87)" 
      @click="$emit('user', path.slice(-87))")

  .flex.flex-col.gap-2.m-2.bg-light-200.dark-bg-dark-400.p-2.rounded-xl.shadow.relative
    .i-la-pen.cursor-pointer.text-2xl.absolute.top-2.right-2.z-2(
      v-if="editable" 
      @click="editing = !editing"
      )
    .p-2.markdown-body.text-base.prose.prose-truegray.dark-bg-dark-400(
      v-if="!editing || !editable" 
      v-html="md.render(text || '')")
    textarea.dark-bg-dark-400(
      v-else 
      v-model="text" 
      @update:model-value="updateField('text', $event)")

  project-funding(
    :path="path" 
    :enabled="project.funding" 
    @enable="updateField('funding', 'true')"
    @gift="$emit('gift', $event)"
    )

  .p-2.flex.flex-col.gap2
    input.dark-bg-dark-400(type="text" v-model="newItem.title")
    select.dark-bg-dark-400(v-model="newItem.type")
      option(
        v-for="t in itemTypes" 
        :key="t.type" 
        :value="t.type"
        ) {{ t.title }}
    pre.p-2.break-all.max-w-80vw.overflow-scroll {{ newItem }}
    
</template>
