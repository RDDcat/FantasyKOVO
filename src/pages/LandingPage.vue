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
                <path
                  d="M15.7949 20.2717C18.1233 20.1503 19.9775 18.0462 20.9634 16.5557C19.4429 13.5256 20.0735 10.3008 22.1856 8.20353C21.2699 10.1003 22.0298 14.3212 23.1703 14.7363C26.4267 14.9161 28.9006 17.1717 29.5186 20.0439C27.6378 18.0306 26.7456 17.188 23.5072 17.534C19.6948 20.9583 18.7071 20.6756 15.7949 20.2717Z"
                  fill="#072767"
                ></path>
                <path
                  d="M16.6635 4.09727C11.9672 5.41599 11.127 7.23542 9.00684 9.14073C13.036 1.36886 21.0327 0.262309 25.2858 2.43161C18.5595 3.46128 13.1913 8.71033 15.4443 17.5788C11.0587 10.994 15.9915 4.96344 16.6635 4.09727Z"
                  fill="#0470B5"
                ></path>
                <path
                  d="M9.56507 23.8534C5.82543 19.4104 6.76609 10.5045 11.6186 7.12204C9.25862 12.7244 9.53592 16.7693 14.6895 20.1437C10.3818 19.2058 9.52293 16.7126 8.68956 15.4365C8.68956 15.4365 7.71435 20.0291 9.56507 23.8534Z"
                  fill="#58B2A3"
                ></path>
                <path
                  d="M35.8293 17.4372C37.1494 12.7706 36.0258 11.1088 35.4971 8.31812C40.0662 15.7893 36.8405 23.1407 32.757 25.6105C35.3852 19.3753 33.6817 12.0872 24.8901 9.36458C32.8344 9.08818 35.4364 16.4155 35.8293 17.4372Z"
                  fill="#E33C11"
                ></path>
                <path
                  d="M22.4819 1.09927C28.2413 0.19783 35.4484 5.57802 35.8744 11.4509C32.2499 6.56 28.6144 4.71648 23.0507 7.37191C26.0753 4.18462 28.67 4.73473 30.2005 4.68072C30.2005 4.68072 26.736 1.4888 22.4819 1.09927Z"
                  fill="#9B488E"
                ></path>
                <path
                  d="M15.0163 27.2088C18.5634 30.5382 20.5667 30.3221 23.3006 31.1542C14.5166 31.7009 9.46147 25.448 9.15723 20.7089C13.4948 25.9178 20.7838 27.8061 27.2964 21.3393C23.8512 28.4545 16.1096 27.338 15.0163 27.2088Z"
                  fill="#8FC443"
                ></path>
                <path
                  d="M35.6436 22.9548C33.8233 28.4562 25.7142 32.3707 20.2583 30.0674C26.294 29.0958 29.6045 26.7239 29.7642 20.595C31.2396 24.7227 29.5628 26.7647 28.9124 28.1421C28.9124 28.1421 33.3532 26.5368 35.6434 22.9548H35.6436Z"
                  fill="#F9AC1D"
                ></path>
                <path
                  d="M17.4747 37.1877C23.9662 37.3152 23.8807 46.4516 17.5709 46.5832C10.7743 46.5545 11.1971 37.2281 17.4747 37.1877ZM17.4891 39.0357C14.3363 39.0568 14.5099 44.7783 17.5218 44.7894C20.5853 44.8452 20.2456 39.0289 17.4891 39.0357ZM3.74221 38.533C3.73976 37.8467 3 37.3691 3 37.3691H6.39925L6.43986 41.0791L9.12687 37.9127C9.49185 37.5559 9.84674 37.4614 10.2098 37.4587H12.3222L8.84258 41.6141L12.5332 46.3967L9.53519 46.3677L6.48483 42.355L6.40006 46.3785H3.82971L3.74249 38.533H3.74221ZM23.4361 39.9507C22.9258 38.7341 22.6966 38.3952 22.3085 38.008L21.6693 37.4097C21.6693 37.4097 23.9444 37.4165 25.0819 37.4449L26.215 40.4448C26.215 40.4448 27.3998 43.3898 27.4634 43.3229L29.346 38.7628C29.7562 37.711 29.8811 37.4877 30.3861 37.4755H32.4018L28.8638 46.3823H25.9849L23.4361 39.9507ZM37.1514 37.1877C43.643 37.3152 43.5574 46.4516 37.2476 46.5832C30.451 46.5545 30.8738 37.2281 37.1514 37.1877ZM37.1658 39.0357C34.013 39.0568 34.1866 44.7783 37.1985 44.7894C40.262 44.8452 39.9224 39.0289 37.1658 39.0357Z"
                  fill="#072767"
                ></path>
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
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group">
                <path
                  id="Vector"
                  d="M9.47717 21.4325C12.0665 21.2975 14.1285 18.9576 15.225 17.3C13.5341 13.9303 14.2353 10.3441 16.5841 8.01172C15.5658 10.1211 16.4109 14.8151 17.6793 15.2767C21.3006 15.4766 24.0518 17.9851 24.7391 21.1793C22.6474 18.9403 21.6553 18.0033 18.0539 18.388C13.8141 22.1961 12.7157 21.8817 9.47717 21.4325Z"
                  fill="#072767"
                ></path>
                <path
                  id="Vector_2"
                  d="M10.4434 3.44408C5.22082 4.9106 4.28641 6.93396 1.92859 9.05284C6.4094 0.409846 15.3024 -0.820732 20.0322 1.59172C12.552 2.7368 6.58211 8.57419 9.08758 18.4367C4.2104 11.1138 9.69617 4.40733 10.4434 3.44408Z"
                  fill="#0470B5"
                ></path>
                <path
                  id="Vector_3"
                  d="M2.54945 25.4153C-1.60935 20.4743 -0.563246 10.5701 4.83317 6.80859C2.20865 13.0389 2.51704 17.5372 8.24826 21.2898C3.45771 20.2467 2.5026 17.4741 1.57582 16.055C1.57582 16.055 0.491302 21.1624 2.54945 25.4153Z"
                  fill="#58B2A3"
                ></path>
                <path
                  id="Vector_4"
                  d="M31.7576 18.2798C33.2257 13.0902 31.9761 11.2422 31.3882 8.13867C36.4694 16.4472 32.8821 24.6227 28.3409 27.3693C31.2637 20.4353 29.3693 12.3302 19.5923 9.30242C28.4269 8.99504 31.3206 17.1437 31.7576 18.2798Z"
                  fill="#E33C11"
                ></path>
                <path
                  id="Vector_5"
                  d="M16.9141 0.1104C23.319 -0.892082 31.3339 5.09116 31.8077 11.6223C27.7769 6.1832 23.7339 4.13305 17.5466 7.08611C20.9102 3.54157 23.7957 4.15334 25.4978 4.09327C25.4978 4.09327 21.645 0.543592 16.9141 0.1104Z"
                  fill="#9B488E"
                ></path>
                <path
                  id="Vector_6"
                  d="M8.612 29.1464C12.5567 32.8489 14.7845 32.6087 17.8248 33.534C8.05625 34.142 2.43454 27.1882 2.09619 21.918C6.91998 27.7107 15.0259 29.8107 22.2685 22.619C18.4372 30.5317 9.82782 29.2901 8.612 29.1464Z"
                  fill="#8FC443"
                ></path>
                <path
                  id="Vector_7"
                  d="M31.5509 24.4153C29.5266 30.5333 20.5086 34.8866 14.4412 32.3251C21.1534 31.2447 24.8349 28.6068 25.0125 21.791C26.6533 26.3813 24.7886 28.6523 24.0653 30.184C24.0653 30.184 29.0038 28.3987 31.5507 24.4153H31.5509Z"
                  fill="#F9AC1D"
                ></path>
              </g></svg
            ><svg
              width="50"
              height="24"
              viewBox="0 0 50 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#072767"
            >
              <g id="Group">
                <path
                  id="Vector"
                  d="M19.0603 0.355469C27.1708 0.514781 27.0639 11.9298 19.1805 12.0942C10.6888 12.0583 11.217 0.405867 19.0603 0.355469ZM19.0783 2.66431C15.1391 2.6907 15.3561 9.83912 19.1192 9.85298C22.9466 9.92266 22.5223 2.65586 19.0783 2.66431ZM1.90293 2.0362C1.89986 1.17875 0.975609 0.582092 0.975609 0.582092H5.22263L5.27337 5.21737L8.63052 1.26128C9.08652 0.815479 9.52992 0.697432 9.98354 0.69405H12.6228L8.27533 5.88574L12.8864 11.8611L9.14067 11.8249L5.32956 6.81151L5.22365 11.8385H2.01225L1.90327 2.0362H1.90293ZM26.5085 3.80757C25.8709 2.28751 25.5845 1.86403 25.0996 1.38034L24.301 0.632828C24.301 0.632828 27.1436 0.641284 28.5647 0.676799L29.9804 4.42487C29.9804 4.42487 31.4608 8.10427 31.5401 8.02072L33.8923 2.32336C34.4048 1.00929 34.5608 0.730242 35.1918 0.715021H37.7102L33.2899 11.8432H29.693L26.5085 3.80757ZM43.6443 0.355469C51.7549 0.514781 51.648 11.9298 43.7645 12.0942C35.2729 12.0583 35.8011 0.405867 43.6443 0.355469ZM43.6624 2.66431C39.7232 2.6907 39.9401 9.83912 43.7032 9.85298C47.5307 9.92266 47.1064 2.65586 43.6624 2.66431Z"
                  fill="currentColor"
                ></path>
                <g id="Group_2">
                  <path
                    id="Vector_2"
                    d="M3.21656 16.8996L4.49661 18.6614H3.94274L2.91177 17.2411L2.35351 17.8639V18.6618H1.90269V15.5263H2.35351V17.2197L3.86952 15.5176H4.47075L3.21656 16.8996Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_3"
                    d="M6.22336 15.4863C7.09079 15.4863 7.79548 16.2115 7.79548 17.0905C7.79548 17.9694 7.09119 18.6946 6.22336 18.6946C5.35554 18.6946 4.64727 17.9737 4.64727 17.0905C4.64727 16.2072 5.35594 15.4863 6.22336 15.4863ZM7.34863 17.0905C7.34863 16.4506 6.83335 15.9345 6.22336 15.9345C5.61338 15.9345 5.09372 16.4506 5.09372 17.0905C5.09372 17.7303 5.60463 18.2508 6.22336 18.2508C6.8421 18.2508 7.34863 17.7346 7.34863 17.0905Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_4"
                    d="M8.27976 15.5215H9.60279C10.1439 15.5215 10.582 15.9566 10.582 16.5324C10.5693 17.0185 10.2685 17.3643 9.87773 17.5007L10.7324 18.661H10.1869L9.37081 17.5603H8.71785V18.661H8.27976V15.5215ZM10.1479 16.5368C10.1479 16.221 9.89007 15.9653 9.56817 15.9653H8.71785V17.1213H9.56817C9.89047 17.1213 10.1479 16.8569 10.1479 16.5368Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_5"
                    d="M13.3308 15.9519H11.6512V16.8264H13.1931V17.2659H11.6512V18.2259H13.3308V18.661H11.2048V15.5215H13.3308V15.9523V15.9519Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_6"
                    d="M16.7576 18.661H16.2809L15.9288 17.8121H14.4641L14.112 18.661H13.6353L14.9539 15.5215H15.4394L16.758 18.661H16.7576ZM15.731 17.343L15.1987 16.0677L14.6619 17.343H15.7314H15.731Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_7"
                    d="M20.0002 18.661H19.4503L17.6506 16.1653V18.661H17.1998V15.5215H17.7366L19.5534 18.0129V15.5215H20.0002V18.661Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_8"
                    d="M23.3673 18.661H22.8819L21.5505 15.5215H22.0315L23.1309 18.1109L24.1961 15.5215H24.6513L23.3673 18.661Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_9"
                    d="M26.3013 15.4863C27.1687 15.4863 27.8734 16.2115 27.8734 17.0905C27.8734 17.9694 27.1691 18.6946 26.3013 18.6946C25.4334 18.6946 24.7252 17.9737 24.7252 17.0905C24.7252 16.2072 25.4338 15.4863 26.3013 15.4863ZM27.4265 17.0905C27.4265 16.4506 26.9112 15.9345 26.3013 15.9345C25.6913 15.9345 25.1716 16.4506 25.1716 17.0905C25.1716 17.7303 25.6825 18.2508 26.3013 18.2508C26.92 18.2508 27.4265 17.7346 27.4265 17.0905Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_10"
                    d="M28.7965 18.2259H30.3642V18.661H28.3501V15.5215H28.7969V18.2259H28.7965Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_11"
                    d="M31.3302 18.2259H32.898V18.661H30.8838V15.5215H31.3306V18.2259H31.3302Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_12"
                    d="M35.5003 15.9519H33.8208V16.8264H35.3627V17.2659H33.8208V18.2259H35.5003V18.661H33.3743V15.5215H35.5003V15.9523V15.9519Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_13"
                    d="M37.5534 17.4366V18.661H37.1154V17.4366L35.8568 15.5215H36.3852L37.3346 16.9675L38.288 15.5215H38.812L37.5534 17.4366Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_14"
                    d="M39.2583 15.5215H40.6243C41.1053 15.5215 41.4917 15.8926 41.4917 16.3747C41.4917 16.6435 41.3584 16.8612 41.161 17.0189C41.4014 17.1683 41.5649 17.4584 41.5649 17.7868C41.5649 18.2729 41.1742 18.6614 40.6931 18.6614H39.2587V15.5219L39.2583 15.5215ZM39.7091 16.8268H40.6111C40.8558 16.8181 41.0448 16.6435 41.0448 16.4004C41.0448 16.1574 40.8387 15.961 40.5896 15.961H39.7091V16.8268ZM39.7091 18.2049H40.6497C40.8988 18.2049 41.1005 18.0085 41.1005 17.7485C41.1005 17.4754 40.8988 17.2663 40.6497 17.2663H39.7091V18.2049Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_15"
                    d="M45.0047 18.661H44.528L44.1759 17.8121H42.7112L42.359 18.661H41.8823L43.201 15.5215H43.6864L45.0051 18.661H45.0047ZM43.9781 17.343L43.4457 16.0677L42.9089 17.343H43.9785H43.9781Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_16"
                    d="M45.898 18.2259H47.4658V18.661H45.4516V15.5215H45.8984V18.2259H45.898Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_17"
                    d="M48.4323 18.2259H50V18.661H47.9858V15.5215H48.4327V18.2259H48.4323Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_18"
                    d="M3.98048 21.071H2.3443V21.9883H3.75288V22.4277H2.3443V23.7801H1.89746V20.6406H3.98048V21.0714V21.071Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_19"
                    d="M6.5834 21.071H4.90385V21.9456H6.44572V22.3851H4.90385V23.345H6.5834V23.7801H4.4574V20.6406H6.5834V21.0714V21.071Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_20"
                    d="M7.14629 20.6387H8.09568C8.96311 20.6387 9.67177 21.3425 9.67177 22.2084C9.67177 23.0743 8.96311 23.7782 8.09568 23.7782H7.14629V20.6387ZM9.22095 22.2084C9.22095 21.5899 8.71004 21.0864 8.0913 21.0864H7.59751V23.3304H8.0913C8.70964 23.3304 9.22095 22.8269 9.22095 22.2084Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_21"
                    d="M12.2227 21.071H10.5431V21.9456H12.085V22.3851H10.5431V23.345H12.2227V23.7801H10.0967V20.6406H12.2227V21.0714V21.071Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_22"
                    d="M12.7852 20.6387H14.1082C14.6494 20.6387 15.0875 21.0738 15.0875 21.6496C15.0747 22.1357 14.7739 22.4815 14.3832 22.6179L15.2379 23.7782H14.6923L13.8762 22.6775H13.2233V23.7782H12.7852V20.6387ZM14.6533 21.654C14.6533 21.3382 14.3955 21.0825 14.0736 21.0825H13.2233V22.2385H14.0736C14.3959 22.2385 14.6533 21.9741 14.6533 21.654Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_23"
                    d="M18.7638 23.7801H18.2871L17.935 22.9312H16.4703L16.1182 23.7801H15.6415L16.9601 20.6406H17.4456L18.7642 23.7801H18.7638ZM17.7372 22.4621L17.2048 21.1868L16.668 22.4621H17.7376H17.7372Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_24"
                    d="M21.0655 21.0694H20.1679V23.7782H19.717V21.0694H18.8194V20.6387H21.0655V21.0694Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_25"
                    d="M22.1091 20.6387V23.7782H21.6622V20.6387H22.1091Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_26"
                    d="M24.2565 20.6055C25.124 20.6055 25.8287 21.3307 25.8287 22.2096C25.8287 23.0885 25.1244 23.8137 24.2565 23.8137C23.3887 23.8137 22.6805 23.0929 22.6805 22.2096C22.6805 21.3263 23.3891 20.6055 24.2565 20.6055ZM25.3818 22.2096C25.3818 21.5698 24.8665 21.0536 24.2565 21.0536C23.6466 21.0536 23.1269 21.5698 23.1269 22.2096C23.1269 22.8494 23.6378 23.3699 24.2565 23.3699C24.8753 23.3699 25.3818 22.8538 25.3818 22.2096Z"
                    fill="currentColor"
                  ></path>
                  <path
                    id="Vector_27"
                    d="M29.1011 23.7801H28.5512L26.7515 21.2844V23.7801H26.3006V20.6406H26.8374L28.6542 23.132V20.6406H29.1011V23.7801Z"
                    fill="currentColor"
                  ></path>
                </g>
              </g>
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
