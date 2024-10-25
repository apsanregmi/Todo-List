import { getLocalStorageData } from '../user/login.service';

export async function getHeadingText() {
  return "This todo list application is powered by 'Freeschema Frontend' which is the Semantic Concept Connection System framework";
}

export async function showAlert() {
  alert('This is an alert message!');
}

export async function checkLogin() {
  const profileData: any = await getLocalStorageData();

  if (profileData?.token && profileData?.userId) {
    return true;
  } else {
    return false;
  }
}
