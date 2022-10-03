import axios from "axios";

const baseURL = "https://j7a604.p.ssafy.io/molaeng";
// const baseURL = "http://localhost:8080/molaeng";

/**
 * 사용방법 예시
 *
 * import API from "@/api/APIs";
 *
 * const api = API;
 *
 * // response.data가 {"seoul": 6543, "my": 6345, "gugunName":'강남구' } 형식일 때
 *
 * api.outPrice(this.recipeId).then((res) => {
 *
 *     this.seoul = res.seoul;
 *
 *     this.my = res.my;
 *
 *     this.gugunName = res.gugunName;
 *
 *   });
 */
const API = {
  instance: axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  }),
  async outPrice(recipeId) {
    const response = await this.instance.get("/recipe/outeat/" + recipeId);
    return response.data;
  },
  async recipeLike(recipeId, userId) {
    const response = await this.instance.post("/recipe/like/", {
      recipeId: recipeId,
      userId: userId,
    });
    return response.data.result;
  },
  async dislikeRecipe(recipeId, userId) {
    const response = await this.instance.delete("/recipe/like", {
      data: {
        recipeId: recipeId,
        userId: userId,
      },
    });
    return response.data.result;
  },
  async getCalendar(userId, year, month) {
    const response = await this.instance.get(
      "/diary/calendar" +
        "?userId=" +
        userId +
        "&year=" +
        year +
        "&month=" +
        month
    );
    return response.data;
  },
  async getMonthGraph(userId, year, month) {
    const response = await this.instance.get(
      "/diary/month" + "?userId=" + userId + "&year=" + year + "&month=" + month
    );
    return response.data;
  },
  async getWeekGraph(userId, year, month) {
    const response = await this.instance.get(
      "/diary/week" + "?userId=" + userId + "&year=" + year + "&month=" + month
    );
    return response.data;
  },
  async saveDiary(userId, recipeId, saveCost) {
    const response = await this.instance.post("/diary", {
      userId: userId,
      recipeId: recipeId,
      saveCost: saveCost,
    });
    return response.data;
  },
  async getDiary(userId, date) {
    const response = await this.instance.get(
      "/diary" + "?userId=" + userId + "&date=" + date
    );
    return response.data;
  },
  async deleteDiary(diaryId) {
    const response = await this.instance.delete("/diary/" + diaryId);
    return response.data;
  },
  //레시피
  async getRecipeInfo(recipeId) {
    //userId 구하기
    let userId = 1;
    // const response = await this.instance.get("/recipe/" + recipeId, {
    //   params: {
    //     userId: userId,
    //   },
    // });

    const response = await this.instance.get(
      "/recipe/" + recipeId + "?userId=" + userId
    );

    return response.data.result;
  },
  async getRecipeDetail(recipeId) {
    const response = await this.instance.get("/recipe/detail/" + recipeId);
    return response.data.result;
  },
  async registRecipeLike(recipeId) {
    //userId 구하기
    const response = await this.instance.post("/recipe/like", {
      userId: 1,
      recipeId: recipeId,
    });
    return response.data;
  },
  async deleteRecipeLike(recipeId) {
    //userId 구하기
    //delete의 경우 RequestBody는 data에 담아서 보내야 함
    const response = await this.instance.delete("/recipe/like", {
      data: {
        userId: 1,
        recipeId: recipeId,
      },
    });
    console.log(response);
    return response.data;
  },
  async recentRecipe(recipeIdList) {
    let queryParam = "";
    for (let recipeId of recipeIdList) {
      queryParam += recipeId + ",";
    }
    queryParam = queryParam.slice(0, -1);
    const response = await this.instance.get(
      "/recipe/history?recipeIdList=" + queryParam
    );
    return response.data.result;
  },

  async getAllIngredients() {
    const response = await this.instance.get("/search");
    return response.data;
  },

  async getRecipeIngredients(recipeId) {
    const response = await this.instance.get("/recipe/ingredient/" + recipeId);
    return response.data;
  },

  async getHomePrice(recipeId) {
    const response = await this.instance.get("/recipe/priceinfo/" + recipeId);
    return response.data;
  },

  async getRecipeSubIngredients(recipeId) {
    const response = await this.instance.get(
      "/recipe/ingredient/" + recipeId + "/sub"
    );
    return response.data;
  },
};

export default API;
