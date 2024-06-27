<template>
  <VCard variant="outlined" class="withbg">
    <VCardText>
      <div class="d-flex align-center justify-space-between">
        <div>
          <h5 class="text-h5 mb-0">Help & Support Chat</h5>
          <span class="text-caption text-lightText">Typical replay within 5 min</span>
        </div>
        <div class="d-flex align-center justify-center flex-wrap flex-row-reverse">
          <VAvatar size="35" variant="outlined" color="surface" class="ml-n2">
            <img src="@/assets/images/users/avatar-4.png" width="35" alt="vector" />
          </VAvatar>
          <VAvatar size="35" variant="outlined" color="surface" class="ml-n2">
            <img src="@/assets/images/users/avatar-3.png" width="35" alt="vector" />
          </VAvatar>
          <VAvatar size="35" variant="outlined" color="surface" class="ml-n2">
            <img src="@/assets/images/users/avatar-2.png" width="35" alt="vector" />
          </VAvatar>
          <VAvatar size="35" variant="outlined" color="surface">
            <img src="@/assets/images/users/avatar-1.png" width="35" alt="vector" />
          </VAvatar>
        </div>
      </div>
      <VBtn
        color="primary"
        block
        variant="flat"
        density="comfortable"
        class="mt-6"
        href="https://codedthemes.support-hub.io/"
        target="_"
        >Need Help?</VBtn
      >
    </VCardText>
  </VCard>
</template>
