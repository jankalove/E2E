export const hub ='http://localhost:4444/wd/hub';
export const serverUri = 'https://www.booking.com/';

//constants for authorization test
export const INPUT_LOGIN = 'input[name="username"]';
export const INPUT_PASSWORD = 'input[name="password"]';
export const LOGO = 'logo_no_globe_new_logo';
export const BUTTONFORLOGIN = '.bootstrapped-input.btn.btn-primary';
export const USERNAME ='.header_name'; 

//constants for select tour test
export const INPUT_SEARCH = 'ss';
export const SELECT_CITY = '.c-autocomplete__item:nth-child(2)';
export const DAY_TODAY ='.c2-day-s-today';
export const BUTTONFORSEARCH ='#frm .sb-searchbox__button';
export const HOTELES_LIST = 'hotellist_inner';

//constants for logout test
export const USER_PROFILE = '.user_logged_in';
export const PROFILE_MENU =' .profile-menu__link';
export const BUTTONFORLOGOUT = '.profile-menu__link[value="Выйти"]';
export const LOGOUTSUCCESS ="//*[contains(text(),'Войти в аккаунт')]"; 

//not used in the project
export const STARFOUR = '.vpm_popular_filters_info_tt[data-id="class-4"]';
export const WINDOW_LOAD = '.sr-usp-overlay__container';
export const HOTELWITHFOURSTARS = '.sr_item__menu:nth-child(6) .-sprite-ratings_stars_4';
export const HOTELRAITING ='.sr_item__menu:nth-child(1) .bk-icon.-sprite-ratings_stars_5';
export const REVIEW_CHECKBOX = '.vpm_popular_filters_info_tt[data-id="review_score-90"]';
export const FORBUSINESS ="//*[contains(text(),'Мы рекомендуем для бизнес-путешественников')]"; 
export const BUSINESS_TOUR = 'input[value="business"]';