import liff from '@line/liff';

liff.init({ liffId: '1654302088-rB1Ab9ad' }, () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('liff loggedIn:', liff.isLoggedIn());
    console.log('liff decodedIDToken:', liff.getDecodedIDToken());
  }
  // if (!liff.isLoggedIn()) {
  //   liff.login();
  // }
});

export const getDecodedIDToken = () => {
  if (process.env.NODE_ENV === 'development') {
    return { sub: 'dummy_usrId' };
  }
  return liff.getDecodedIDToken();
};
