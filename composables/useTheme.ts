// composables/useTheme.ts
export const useTheme = () => {
  const theme = useState<"light" | "dark">("theme", () => "dark");

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
    updateHtmlClass();
  };

  const updateHtmlClass = () => {
    if (theme.value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  onMounted(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      theme.value = saved;
    }
    updateHtmlClass();
  });

  watch(theme, (val) => {
    localStorage.setItem("theme", val);
  });

  return {
    theme,
    toggleTheme,
  };
};
