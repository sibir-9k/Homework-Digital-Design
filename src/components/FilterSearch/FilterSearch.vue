<template>
  <div class="filter-search">
    <SearchInput></SearchInput>
    <div class="filter-search__select-block">
      <Select classNameOption="filter-search__select" :v-model="selected" :options="sortElem"></Select>
      <button class="filter-search__btn">
        <Icon iconName="filter-arrow-up"></Icon>
      </button>
    </div>
    <router-link to="/create-task" class="filter-search__add-task"
      >Добавить</router-link
    >
  </div>
</template>

<script>
import SearchInput from "@/UI/SearchInput/SearchInput.vue";
import Select from "@/UI/Select/Select.vue";
import Icon from "@/UI/Icon/Icon.vue";
import "./style.scss";
export default {
  name: "FilterSearch",
  components: {
    SearchInput,
    Select,
    Icon,
  },
  data() {
    return {
      selected: "",
      sortElem: [
        { value: "По названию", optionText: "По названию" },
        { value: "По автору", optionText: "По автору" },
        { value: "По статусу", optionText: "По статусу" },
        { value: "По исполнителю", optionText: "По исполнителю" },
        { value: "По дате создания", optionText: "По дате создания" },
        { value: "По дате обновления", optionText: "По дате обновления" },
      ],
    };
  },
};
</script>
