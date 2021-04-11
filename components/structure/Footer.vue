<template>
  <footer class="tui-footer">
    <div class="tui-container">
      <a
        href="http://www.tuigroup.com/en-en"
        target="_blank"
        rel="noopener"
        class="app-copyrights"
        data-v-38e248be=""
        data-v-a1d4f7a0=""
        >© TUI Group</a
      >
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.tui-footer {
  display: flex;
  padding: 32px 0;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    transition: fill 0.25s cubic-bezier(0, 0, 0.5, 0.5);
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    color: #9b9b9b;
    &:hover {
      color: #10a0de;
    }
  }
}
</style>
