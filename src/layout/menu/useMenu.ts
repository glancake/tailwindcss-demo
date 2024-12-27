import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";


interface IMenu {
  key: string,
  name: string,
  icon: string,
  path: string,
}

interface IMenus {
  name: string,
  menus: IMenu[]
}

export function useMenu() {
  const menus: IMenus[] = [{
    name: '古文观止',
    menus: [
      {
        key: 'message',
        name: '名句',
        icon: 'fa-solid fa-message',
        path: 'b'
      },
      {
        key: 'message',
        name: '诗人',
        icon: 'fa-solid fa-message',
        path: 'a',
      }
    ]
  }, {
    name: '留言板',
    menus: [
      {
        key: 'message',
        name: '留言',
        icon: 'fa-solid fa-message',
        path: 'message',
      }
    ]
  }]

  const route = useRoute();
  const router = useRouter();
  const currentKey = ref(route.meta.menu);
  watch(
    () => route.meta.menu,
    (menu) => {
      currentKey.value = menu;
    }
  );
  const click = async (menu: IMenu) => {
    await router.push({ name: menu.key, replace: true, })
  };

  return {
    menus,
    click,
    currentKey,
  };
}