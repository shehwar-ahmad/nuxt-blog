import { defineStore } from "pinia";
import data from "~/db/db.json";
import { ref } from "vue";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
  const userCookie = useCookie("user");
  const user = ref(userCookie.value || null);
  const router = useRouter();

  const loginUser = async (username, password) => {
    const users = data.users;

    console.log("users", users);

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      user.value = foundUser;
      userCookie.value = foundUser;
      router.push("/admin/create-post");
    } else {
      alert("Invalid username or password");
      throw new Error("Invalid username or password");
    }
  };

  const logoutUser = async () => {
    user.value = null;
    userCookie.value = null;
    router.push("/login");
  };

  return {
    user,
    loginUser,
    logoutUser,
  };
});
