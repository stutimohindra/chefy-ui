export interface HeaderProps {
  isLoggedIn: boolean;
  isChefbooked: boolean;
  isTimerComplete?: (done: boolean) => void;
}
