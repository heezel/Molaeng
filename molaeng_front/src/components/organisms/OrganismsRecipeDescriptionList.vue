<template>
  <v-stepper vertical style="box-shadow: none; max-width: 420px">
    <recipe-description-list-item
      v-for="(detail, index) in recipeDetailList"
      :key="index"
      :order="detail.recipeOrder"
      :detailImg="detail.recipeDetailImg"
      :content="detail.recipeContent"
    >
    </recipe-description-list-item>
    <under-bar-button :text="buttonText" @click.native="clickAddButton">
      모랭일기에 기록하기
    </under-bar-button>
    <v-dialog v-model="dialog">
      <v-card style="margin: auto">
        <v-card-title class="dialogtitle">모랭일기 등록하기</v-card-title>
        <v-card-text>이 레시피를 모랭일기에 기록하시겠어요?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn depressed color="primary" white--text @click="addDiary">
            예
          </v-btn>
          <v-btn outlined color="primary" @click="dialog = false">아니요</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      color="carrot"
      rounded="pill"
      text
      centered
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ snackBarText }}
    </v-snackbar>
  </v-stepper>
</template>

<script>
import RecipeDescriptionListItem from "../molecules/MoleculesRecipeDescriptionListItem.vue";
import UnderBarButton from "../atoms/AtomsUnderBarButton.vue";

import API from "@/api/APIs";
const api = API;

export default {
  name: "RecipeDescriptionList",
  components: {
    RecipeDescriptionListItem,
    UnderBarButton,
  },
  props: {
    userId: Number,
    recipeId: String,
    outeat: Object,
    recipePrice: Number,
  },
  async created() {
    //레시피 조리방법
    this.recipeDetailList = await api.getRecipeDetail(this.recipeId);
    //정렬
    this.recipeDetailList.sort(function (a, b) {
      return a.recipeOrder - b.recipeOrder;
    });
  },
  data: () => ({
    //레시피 조리방법
    recipeDetailList: [],
    buttonText: "모랭일기에 기록하기",
    snackBarText: "",
    saveCost: 0,
    dialog: false,
    snackbar: false,
    timeout: 1500,
  }),
  methods: {
    async addDiary() {
      if (this.outeat.my != 0) {
        this.saveCost = this.outeat.my - this.recipePrice;
      } else if (this.outeat.seoul != 0) {
        this.saveCost = this.outeat.seoul - this.recipePrice;
      } else {
        this.saveCost = 0;
      }
      this.res = await api.saveDiary(this.userId, this.recipeId, this.saveCost);
      this.dialog = false;
      this.snackBarText = "이 레시피를 모랭일기에 기록했어요!";
      this.snackbar = true;
    },
    clickAddButton() {
      if (this.userId != 0) {
        this.dialog = true;
      } else {
        this.snackBarText = "로그인이 필요한 기능입니다!";
        this.snackbar = true;
      }
    },
  },
};
</script>

<style>
.v-snack__content {
  font-size: 1rem;
  text-align: center;
}
</style>
