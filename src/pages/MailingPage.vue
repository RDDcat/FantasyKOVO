<template>
  <div
    style="font-family: 'GmarketSansMedium'"
    class="relative h-custom overflow-hidden"
  >
    <!-- 배경 비디오 -->
    <video
      autoplay
      muted
      loop
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="@/assets/video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <!-- 비디오에 블러 효과 추가 -->
    <div class="absolute top-0 left-0 w-full h-full backdrop-blur-md z-0"></div>

    <div
      class="flex flex-col items-center justify-center py-12 bg-gray-100 bg-opacity-90 p-4 z-10"
      @click="handleClick"
      tabindex="0"
    >
      <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6 z-20">
        <h1 class="text-xl sm:text-2xl font-bold mb-4 text-center">
          사전 등록 안내
        </h1>
        <div class="text-base mb-6">
          <p class="text-center sm:text-left">
            판타지 배구리그 서비스에 관심가져주셔서 감사합니다. 현재 수요조사를
            위한
            <span class="text-blue-700">사전등록</span> 진행중에 있습니다. 정식
            런칭할 수 있게 많은 관심 부탁드립니다!!
          </p>
        </div>
        <div class="space-y-4">
          <img src="@/assets/qr.png" alt="QR Code" class="mx-auto w-48 h-48" />
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">또는</span>
            </div>
          </div>
          <button
            @click="openKakaoTalk"
            class="w-full bg-yellow-400 text-black hover:bg-yellow-500 py-3 px-4 rounded-md flex items-center justify-center text-sm sm:text-base"
          >
            <svg
              class="w-5 h-5 mr-2"
              viewBox="0 0 36 36"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 1.5C8.34 1.5 0.5 7.63 0.5 15.25C0.5 20.14 3.65 24.35 8.35 26.84L6.28 34.16C6.12 34.66 6.67 35.08 7.11 34.82L16.03 29.41C16.68 29.48 17.34 29.52 18 29.52C27.66 29.52 35.5 23.37 35.5 15.75C35.5 8.13 27.66 1.5 18 1.5Z"
              />
            </svg>
            카카오톡으로 사전등록
          </button>

          <button
            @click="showEmailDialog = true"
            class="w-full border border-gray-300 text-gray-700 hover:bg-gray-100 py-3 px-4 rounded-md text-sm sm:text-base"
          >
            이메일로 사전등록
          </button>
        </div>
      </div>

      <!-- 이메일 등록 다이얼로그 -->
      <div
        v-if="showEmailDialog"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-30"
      >
        <div class="bg-white p-6 rounded-lg w-full max-w-sm">
          <h2 class="text-lg font-bold mb-4">이메일 사전등록</h2>
          <p class="mb-4 text-sm">
            이메일 주소를 입력하여 사전등록을 완료해주세요.
          </p>
          <form @submit.prevent="handleEmailSubmit">
            <input
              v-model="email"
              type="email"
              required
              placeholder="이메일 주소"
              class="w-full px-3 py-2 border border-gray-300 rounded-md mb-4 text-sm"
            />
            <div class="flex justify-end">
              <button
                type="button"
                @click="showEmailDialog = false"
                class="mr-2 px-4 py-2 text-gray-600 hover:text-gray-800 text-sm"
              >
                취소
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-sm"
              >
                등록
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- 알림 메시지 -->
      <div
        v-if="showAlert"
        class="fixed bottom-4 right-4 left-4 bg-white border-l-4 border-blue-500 p-4 shadow-md text-sm z-30"
      >
        {{ alertMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const email = ref("");
    const showEmailDialog = ref(false);
    const showAlert = ref(false);
    const alertMessage = ref("");

    const openKakaoTalk = () => {
      window.open("https://open.kakao.com/o/s6mFHYUg", "_blank");
    };

    const handleEmailSubmit = async () => {
      try {
        await axios.post("https://back.playinfantasy.com/email", {
          email: email.value,
        });
        alertMessage.value = "이메일이 성공적으로 등록되었습니다.";
        showAlert.value = true;
        email.value = "";
        showEmailDialog.value = false;
      } catch (error) {
        alertMessage.value = "이메일 등록에 실패했습니다. 다시 시도해 주세요.";
        showAlert.value = true;
      }

      setTimeout(() => {
        showAlert.value = false;
      }, 3000);
    };

    return {
      email,
      showEmailDialog,
      showAlert,
      alertMessage,
      openKakaoTalk,
      handleEmailSubmit,
    };
  },
};
</script>

<style scoped>
.h-custom {
  height: calc(100vh - 10rem);
}
</style>
