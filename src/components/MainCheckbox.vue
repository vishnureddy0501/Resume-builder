<template>
  <div>
    <input
			class="checkbox"
      type="checkbox"
      :name="name"
      :id="id"
      :checked="checked"
      :disabled="disabled"
      @input="handleClick($event)">
    <label :for="id">{{label}}</label>
  </div>
</template>

<script setup>

  const emits = defineEmits(['update:checked', 'updateCheckboxGroup'])
  defineProps({
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
  })
  const handleClick = (event) => {
		emits('update:checked', event.target.checked)
  }
</script>

<style lang="scss" scoped>
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
		cursor: pointer;
  }
  & + label::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid rgb(71,85,105);
    border-radius: 4px;
    margin-right: 10px;
		background: white;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  &:checked + label::before {
    border-color: rgb(71,85,105);
    background-color: rgb(71,85,105);
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none"><path d="M5.7 12.025L0 6.325L1.425 4.9L5.7 9.175L14.875 0L16.3 1.425L5.7 12.025Z" fill="white"/></svg>');
		background-position: 1px 50%;
		background-size: 17px 13px;
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: rgb(71,85,105);
  }
  &:not(:disabled):active + label::before {
    background-color: rgb(71,85,105);
    border: 1px solid #ECEBED;
  }
  &:focus + label::before {
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
  }
  &:focus:not(:checked) + label::before {
    border-color: rgb(71,85,105);
  }
  &:disabled + label::before {
    background-color: #e9ecef;
    border: 1px solid #ECEBED;
  }
}
</style>