<template>
  <!-- 메인 페이지 첫 랜딩 페이지 -->
  <div class="bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <!-- 클릭 배너 -->
      <div
        style="font-family: SBAggroB"
        class="relative mb-8 cursor-pointer overflow-hidden"
        @click="goBuild()"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <div class="relative w-full aspect-video rounded-xl bg-white">
          <transition name="slide-fade" mode="out-in">
            <!-- <img v-if="isHovered"
                    :class="['ml-auto mr-4 transition-all duration-75 rounded-xl w-44']"
                    src='@/assets/kovo.jpg' 
                    alt=""
                > -->
            <div
              v-if="isHovered"
              class="ml-auto pt-6 transition-all duration-75 rounded-xl w-44"
            >
              <svg
                width="45"
                height="47"
                viewBox="0 0 45 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="w-[67px] h-full mx-[2%] object-contain cursor-pointer"
              >
                <g clip-path="url(#clip0_11361_10506)">
                  <path
                    d="M5.01082 7.61766C3.72617 5.39002 5.33426 2.60205 7.90812 2.60205H19.0053C20.6726 2.60205 22.217 3.49037 23.0506 4.93447L26.5994 11.0798H16.8096L21.7067 19.5576L18.65 24.8511C17.83 26.2679 15.7891 26.2679 14.9692 24.8511L5.01082 7.61766Z"
                    fill="#003B83"
                  ></path>
                  <path
                    d="M29.2872 11.084C27.6199 11.084 26.0756 11.9723 25.2419 13.4164L21.6932 19.5618L18.6364 24.8553C17.8164 26.272 15.7756 26.272 14.9556 24.8553L18.7959 31.5063C20.0805 33.734 23.3013 33.734 24.5859 31.5063L31.4829 19.5618L36.3801 11.084H29.2826H29.2872Z"
                    fill="#0075C2"
                  ></path>
                  <path
                    d="M35.2091 9.43966C37.8131 9.43966 39.924 7.32871 39.924 4.72471C39.924 2.12072 37.8131 0.00976562 35.2091 0.00976562C32.6051 0.00976562 30.4941 2.12072 30.4941 4.72471C30.4941 7.32871 32.6051 9.43966 35.2091 9.43966Z"
                    fill="#0075C2"
                  ></path>
                  <path
                    d="M30.0936 37.4062L26.9184 42.9047L23.7433 37.4062H21.0601L26.2123 46.3305C26.5267 46.8726 27.3057 46.8726 27.62 46.3305L32.7723 37.4062H30.0891H30.0936Z"
                    fill="#2F2725"
                  ></path>
                  <path
                    d="M16.2998 37.1055C13.5711 37.1055 11.3525 39.324 11.3525 42.0527C11.3525 44.7815 13.5711 47 16.2998 47C19.0286 47 21.2471 44.7815 21.2471 42.0527C21.2471 39.324 19.0286 37.1055 16.2998 37.1055ZM16.2998 44.6722C14.8512 44.6722 13.6758 43.4968 13.6758 42.0482C13.6758 40.5995 14.8512 39.4242 16.2998 39.4242C17.7485 39.4242 18.9238 40.5995 18.9238 42.0482C18.9238 43.4968 17.7485 44.6722 16.2998 44.6722Z"
                    fill="#2F2725"
                  ></path>
                  <path
                    d="M37.5376 37.1055C34.8089 37.1055 32.5903 39.324 32.5903 42.0527C32.5903 44.7815 34.8089 47 37.5376 47C40.2664 47 42.4849 44.7815 42.4849 42.0527C42.4849 39.324 40.2664 37.1055 37.5376 37.1055ZM37.5376 44.6722C36.089 44.6722 34.9136 43.4968 34.9136 42.0482C34.9136 40.5995 36.089 39.4242 37.5376 39.4242C38.9863 39.4242 40.1616 40.5995 40.1616 42.0482C40.1616 43.4968 38.9863 44.6722 37.5376 44.6722Z"
                    fill="#2F2725"
                  ></path>
                  <path
                    d="M10.947 37.4062H7.6716L4.31875 40.7682V37.4062H2V46.6904H4.31875V42.8637L8.23193 46.6949H11.5438L6.56006 41.8069L10.947 37.4062Z"
                    fill="#2F2725"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_11361_10506">
                    <rect width="45" height="47" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <img
              v-else
              :class="[
                'transition-all duration-75 rounded-xl ',
                { 'filter hue-rotate-180': isHovered },
              ]"
              src="@/assets/banner.jpg"
              alt=""
            />
          </transition>

          <div class="absolute top-[25%] right-[0] overflow-hidden">
            <transition name="slide-fade">
              <img
                v-if="isHovered"
                :class="[
                  'transition-all duration-300 rounded-xl w-96',
                  { 'opacity-100': isHovered, 'opacity-0': !isHovered },
                ]"
                src="@/assets/cup.jpg"
                alt=""
              />
            </transition>
          </div>
        </div>
        <!-- 글씨 컨테이너  -->
        <div
          class="absolute top-1/2 transform -translate-y-1/2 z-10 overflow-hidden desktop:left-[40%] desktop:text-4xl mobile:right-4 mobile:text-lg"
        >
          <transition name="slide-fade" mode="out-in">
            <div
              v-if="!isHovered"
              :key="currentTextIndex"
              :class="[
                'transition-all duration-300 font-bold',
                { 'text-blue-600': !isHovered, 'text-yellow-400': isHovered },
              ]"
            >
              {{ texts[currentTextIndex] }}
            </div>
          </transition>
        </div>
        <!-- 글씨 컨테이너 호버-->
        <div
          class="absolute top-1/2 transform -translate-y-1/2 z-10 overflow-hidden desktop:left-[10%] desktop:text-4xl mobile:left-4 mobile:text-lg"
        >
          <transition name="slide-fade" mode="out-in">
            <div
              v-if="isHovered"
              :class="[
                'flex flex-col transition-all duration-300 font-bold',
                { 'text-blue-600': !isHovered, 'text-black': isHovered },
              ]"
            >
              <div class="text-base">2024시즌</div>
              <div class="flex">
                <div class="text-blue-600">Fantasy KOVO</div>
                리그 참가하기
              </div>
            </div>
          </transition>
        </div>

        <!-- 호버 시 나타나는 텍스트 -->
        <div
          :class="[
            'absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-800 bg-white bg-opacity-75 px-2 py-1 rounded transition-opacity duration-300',
            { 'opacity-0': !isHovered, 'opacity-100': isHovered },
          ]"
        >
          click! 하여 시작하기
        </div>
      </div>

      <!-- 홍보 카드 섹션 -->
      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-6 mb-12">
        <!-- Leagues 카드 -->
        <div
          class="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg shadow-lg p-6 text-white"
        >
          <h2 class="text-2xl font-bold mb-4">최고의 배잘알을 가려라!</h2>
          <p class="mb-4">다른 유저와 경쟁하여 최고가 되어보세요!</p>
          <div class="flex w-full">
            <button
              class="ml-auto bg-white text-blue-600 font-bold py-2 px-4 rounded"
              @click="goRank()"
            >
              랭킹보기
            </button>
          </div>
        </div>

        <!-- Pick Your Squad 카드 -->
        <div
          class="bg-gradient-to-r from-red-500 to-violet-600 rounded-lg shadow-lg p-6 text-white"
        >
          <h2 class="text-2xl font-bold mb-4">선수단을 모집해보세요!</h2>
          <p class="mb-4">주어진 예산 안에서 최고의 선수단을 구성하세요.</p>
          <div class="flex w-full">
            <button
              class="ml-auto bg-white text-red-600 font-bold py-2 px-4 rounded"
              @click="goBuild()"
            >
              시작하기
            </button>
          </div>
        </div>
      </div>

      <!-- 선수 카드 섹션 -->
      <h2 class="text-3xl font-bold mb-6 text-center">Most Picked!</h2>
      <div class="grid grid-cols-4 mobile:grid-cols-2 gap-4 pb-8">
        <!-- 김연경 카드 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            :src="isHoveredEgg ? hoverImage1 : defaultImage1"
            class="w-full aspect-square object-cover"
          />
          <div class="p-4">
            <h3 class="flex font-bold text-lg mb-2">
              김연경
              <img src="@/assets/icon/outside-hitter.svg" class="w-4" />
              <div class="my-auto text-xs">OH</div>
            </h3>
            <p class="text-gray-600 text-sm">핑크 스파이더스</p>
          </div>
        </div>

        <!-- 이다현 카드 -->
        <div
          class="bg-white rounded-lg shadow-md overflow-hidden"
          @mouseenter="isHoveredEgg = true"
          @mouseleave="isHoveredEgg = false"
        >
          <img
            :src="isHoveredEgg ? hoverImage2 : defaultImage2"
            class="w-full aspect-square object-cover"
          />
          <div class="p-4">
            <h3 class="flex font-bold text-lg mb-2">
              이다현
              <img src="@/assets/icon/middle-blocker.svg" class="w-4" />
              <div class="my-auto text-xs">MB</div>
            </h3>
            <p class="text-gray-600 text-sm">힐스테이트</p>
          </div>
        </div>

        <!-- 허수봉  카드 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="@/assets/players/skywalkers/sky_OP_허수봉.png"
            alt="Pickford"
            class="w-full aspect-square object-cover"
          />
          <div class="p-4">
            <h3 class="flex font-bold text-lg mb-2">
              허수봉
              <img src="@/assets/icon/outside-hitter.svg" class="w-4" />
              <div class="my-auto text-xs">OH</div>
            </h3>
            <p class="text-gray-600 text-sm">스카이워커스</p>
          </div>
        </div>

        <!-- 정지석 카드 -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="@/assets/players/jumbos/jum_OH_정지석.png"
            alt="Raya"
            class="w-full aspect-square object-cover"
          />
          <div class="p-4">
            <h3 class="flex font-bold text-lg mb-2">
              정지석
              <img src="@/assets/icon/outside-hitter.svg" class="w-4" />
              <div class="my-auto text-xs">OH</div>
            </h3>
            <p class="text-gray-600 text-sm">점보스</p>
          </div>
        </div>
      </div>

      <!-- 랭킹 & 뉴스 섹션 -->
      <div
        class="grid desktop:grid-cols-3 mobile:grid-cols-1 gap-6 mt-10 mb-20"
      >
        <!-- 뉴스 섹션 -->
        <div class="desktop:col-span-2">
          <h2 class="text-xl font-bold mt-2 mb-4">News</h2>
          <div class="space-y-4">
            <div
              v-for="news in newsItems"
              :key="news.id"
              class="bg-white rounded-lg shadow-lg overflow-hidden desktop:flex mobile:block mobile:pt-2 hover:shadow-xl flex"
              @click="link(news.link)"
            >
              <img
                :src="news.thumbnail"
                alt="News thumbnail"
                class="desktop:w-1/3 mobile:w-full object-contain my-auto desktop:h-48 mobile:h-40"
              />
              <div class="p-6 desktop:w-2/3">
                <h3 class="text-xl font-bold mb-2">{{ news.title }}</h3>
                <p class="text-gray-600 mb-4">{{ news.description }}</p>
                <div class="flex justify-between items-center">
                  <span class="text-sm text-gray-500">{{ news.date }}</span>
                  <div class="text-blue-500 hover:text-blue-700">Read more</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 유저 랭킹 top5 -->
        <div class="desktop:col-span-1 bg-white rounded-lg shadow-lg p-6">
          <h2 class="text-xl font-bold mb-4">Top 5.</h2>
          <div class="space-y-4">
            <div
              v-for="(rank, index) in topRanks"
              :key="rank.id"
              class="flex items-center space-x-4 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <div
                :class="[
                  'w-8 h-8 flex items-center justify-center rounded-full font-bold',
                  index === 0
                    ? 'bg-yellow-400 text-white'
                    : index === 1
                    ? 'bg-gray-300 text-white'
                    : index === 2
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-100',
                ]"
              >
                {{ index + 1 }}
              </div>
              <img
                :src="rank.avatar"
                alt="User avatar"
                class="w-10 h-10 object-cover rounded-full"
              />
              <div>
                <div class="font-semibold">{{ rank.username }}</div>
                <div class="text-sm text-gray-500">{{ rank.points }} pts</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 스폰서 섹션 -->
      <h2 class="text-center mt-8 w-full flex">
        <div class="flex mx-auto">
          <div class="text-yellow-400">S</div>
          ponser
        </div>
      </h2>
      <div class="flex w-full">
        <!-- <div class="my-4 mx-auto grid grid-cols-6 mobile:grid-cols-3 gap-4 pb-8"> -->
        <div
          class="mt-4 mb-12 mx-auto grid grid-cols-5 mobile:grid-cols-1 gap-4"
        >
          <!-- 스폰서 -->
          <div></div>
          <div></div>
          <!-- <div class="overflow-hidden ">
                <img class=" object-cover rounded-xl" src="@/assets/kovo.png" alt="">
            </div> -->
          <div
            class="bg-white px-6 py-4 rounded-xl flex gap-[7px] justify-center items-center overflow-hidden"
          >
            <svg
              width="45"
              height="47"
              viewBox="0 0 45 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[67px] h-full mx-[2%] object-contain cursor-pointer"
            >
              <g clip-path="url(#clip0_11361_10506)">
                <path
                  d="M5.01082 7.61766C3.72617 5.39002 5.33426 2.60205 7.90812 2.60205H19.0053C20.6726 2.60205 22.217 3.49037 23.0506 4.93447L26.5994 11.0798H16.8096L21.7067 19.5576L18.65 24.8511C17.83 26.2679 15.7891 26.2679 14.9692 24.8511L5.01082 7.61766Z"
                  fill="#003B83"
                ></path>
                <path
                  d="M29.2872 11.084C27.6199 11.084 26.0756 11.9723 25.2419 13.4164L21.6932 19.5618L18.6364 24.8553C17.8164 26.272 15.7756 26.272 14.9556 24.8553L18.7959 31.5063C20.0805 33.734 23.3013 33.734 24.5859 31.5063L31.4829 19.5618L36.3801 11.084H29.2826H29.2872Z"
                  fill="#0075C2"
                ></path>
                <path
                  d="M35.2091 9.43966C37.8131 9.43966 39.924 7.32871 39.924 4.72471C39.924 2.12072 37.8131 0.00976562 35.2091 0.00976562C32.6051 0.00976562 30.4941 2.12072 30.4941 4.72471C30.4941 7.32871 32.6051 9.43966 35.2091 9.43966Z"
                  fill="#0075C2"
                ></path>
                <path
                  d="M30.0936 37.4062L26.9184 42.9047L23.7433 37.4062H21.0601L26.2123 46.3305C26.5267 46.8726 27.3057 46.8726 27.62 46.3305L32.7723 37.4062H30.0891H30.0936Z"
                  fill="#2F2725"
                ></path>
                <path
                  d="M16.2998 37.1055C13.5711 37.1055 11.3525 39.324 11.3525 42.0527C11.3525 44.7815 13.5711 47 16.2998 47C19.0286 47 21.2471 44.7815 21.2471 42.0527C21.2471 39.324 19.0286 37.1055 16.2998 37.1055ZM16.2998 44.6722C14.8512 44.6722 13.6758 43.4968 13.6758 42.0482C13.6758 40.5995 14.8512 39.4242 16.2998 39.4242C17.7485 39.4242 18.9238 40.5995 18.9238 42.0482C18.9238 43.4968 17.7485 44.6722 16.2998 44.6722Z"
                  fill="#2F2725"
                ></path>
                <path
                  d="M37.5376 37.1055C34.8089 37.1055 32.5903 39.324 32.5903 42.0527C32.5903 44.7815 34.8089 47 37.5376 47C40.2664 47 42.4849 44.7815 42.4849 42.0527C42.4849 39.324 40.2664 37.1055 37.5376 37.1055ZM37.5376 44.6722C36.089 44.6722 34.9136 43.4968 34.9136 42.0482C34.9136 40.5995 36.089 39.4242 37.5376 39.4242C38.9863 39.4242 40.1616 40.5995 40.1616 42.0482C40.1616 43.4968 38.9863 44.6722 37.5376 44.6722Z"
                  fill="#2F2725"
                ></path>
                <path
                  d="M10.947 37.4062H7.6716L4.31875 40.7682V37.4062H2V46.6904H4.31875V42.8637L8.23193 46.6949H11.5438L6.56006 41.8069L10.947 37.4062Z"
                  fill="#2F2725"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_11361_10506">
                  <rect width="45" height="47" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useCacheStore } from "@/stores/cacheStore";
import { useModalStore } from "@/stores/modalStore";
import { usePersistStore } from "@/stores/persistStore";

export default {
  components: {},
  setup() {
    const cacheStore = useCacheStore();
    const modalStore = useModalStore();
    const persistStore = usePersistStore();

    const isHovered = ref(false);
    const isHoveredEgg = ref(false);
    const currentTextIndex = ref(0);
    const texts = ref([
      "Fantasy KOVO League",
      "최고의 팀을 만들어보세요",
      "화면을 클릭하여 시작하기!",
    ]);
    let intervalId = null;

    const defaultImage1 = "./assets/players/pinkspiders/pin_OH_김연경.png";
    const hoverImage1 = "./assets/egg/easteregg2.gif";
    const defaultImage2 = "./assets/players/hillstate/hil_MB_이다현.png";
    const hoverImage2 = "./assets/egg/easteregg1.gif";

    const topRanks = ref([
      { id: 1, username: "배구의신", points: 990, avatar: "./assets/ball.jpg" },
      {
        id: 2,
        username: "김연경팬",
        points: 887,
        avatar: "./assets/glass.jpg",
      },
      {
        id: 3,
        username: "배구조아",
        points: 725,
        avatar: "./assets/user-img-2.jpg",
      },
      {
        id: 4,
        username: "마로마로123",
        points: 712,
        avatar: "./assets/user-img-1.jpg",
      },
      {
        id: 5,
        username: "혁명적인거북이",
        points: 711,
        avatar: "./assets/sample2.png",
      },
    ]);

    const newsItems = ref([
      {
        id: 1,
        thumbnail: "./assets/sample.png",
        title: "2024 KOVO 리그 개막 임박!",
        description:
          "오는 10월, 기대되는 2024 KOVO 리그가 시작됩니다. 이번 시즌에는 어떤 팀이 우승할까요?",
        date: "1일 전",
        link: "https://kovo.co.kr/KOVO",
      },
      {
        id: 2,
        thumbnail: "./assets/kovo_ad.jpg",
        title: "도드람 2024~2025 V-리그 올스타전 운영 대행업체 선정 입찰 공고",
        description: "2024년 10월7일(월)~10월22일(화) 15:00까지",
        date: "1일 전",
        link: "https://kovo.co.kr/KOVO",
      },
    ]);

    const rotateText = () => {
      currentTextIndex.value =
        (currentTextIndex.value + 1) % texts.value.length;
    };

    onMounted(() => {
      intervalId = setInterval(rotateText, 3000);
    });

    onBeforeUnmount(() => {
      if (intervalId) clearInterval(intervalId);
    });

    return {
      isHovered,
      isHoveredEgg,
      defaultImage1,
      defaultImage2,
      hoverImage1,
      hoverImage2,
      currentTextIndex,
      texts,
      cacheStore,
      modalStore,
      persistStore,
      topRanks,
      newsItems,
    };
  },
  data() {
    return {};
  },
  methods: {
    goBuild() {
      this.$router.push({ name: "build" });
    },
    goRank() {
      this.$router.push({ name: "rank" });
    },
    link(link) {
      window.location.href = link;
    },
  },
};
</script>
<style scoped>
.text-outline {
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
