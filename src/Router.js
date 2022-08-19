const BASE_TITLE = 'Massage by Viktoria';

export const Router = {
  HOME: {
    path: '/',
    title: BASE_TITLE,
    meta: []
  },
  DASHBOARD: {
    path: '/dashboard',
    title: `Dashboard | ${BASE_TITLE}`
  },
  ADMIN: {
    path: '/admin',
    title: `Dashboard | ${BASE_TITLE}`,
    private: true,
  },
  SIGN_ON: {
    path: '/sign-on',
    title: `Sign on | ${BASE_TITLE}`
  }
}

