import './style.css'
const Stars = ({stars}) => {
    return (
        <div className="la-casa-game__stars">
            <svg xmlns="http://www.w3.org/2000/svg" className={stars>0 ?'active': 'star__svg' }  height="100%" version="1.1" viewBox="0 0 752 752">
            <defs>
            <clipPath id="a">
            <path d="m139.21 150h472.79v453h-472.79z"/>
            </clipPath>
            </defs>
            <g clipPath="url(#a)">
            <path d="m407.3 173.45 60.383 98.242 104.29 25.16c14.652 3.5391 37.336 9.1875 39.703 26.219 3.3047 23.781-35.012 58.27-66.379 95.391-26.977 31.922-22.289 17.086-18.992 59.719 11.258 145.81 16.223 141.02-117.19 85.656-39.977-16.586-27.281-17.039-67.191-0.078126-66.102 28.094-96.984 44.988-111.17 36.758-14.625-8.4961-9.2461-44.43-3.2812-119.43 3.6484-45.82 8.125-32.336-17.449-62.586-97.75-115.63-103.72-103.67 41.887-138.53 42.539-10.184 29.707-0.51562 52.617-37.621 12.098-19.602 25.094-43.562 37.062-62.789 22.969-36.902 45.68-38.801 65.707-6.1133zm21.992 79.734c-0.51172-0.82422-29.547-50.52-43.773-70.25-7.1602-9.9414-8.6016-11.719-17.84 0.18359-20.449 26.359-57.297 106.38-71.254 109.75-152.53 36.871-143.76 23.859-116.02 57.055 48.078 57.547 67.477 73.242 72.133 87.258 3.4922 10.516-0.089844 20.094-2.1328 45.695-8.6914 109.25-14.656 101.44 12.789 89.832 131.31-55.512 100.39-52.648 154.73-30.102 114.06 47.336 95.066 61.758 85.445-62.727-4.2344-54.75-10.777-34.664 24.387-76.27 80.484-95.215 90.617-71.969-32.219-101.6-53.871-13-36.391-0.28125-66.238-48.828z" fillRule="evenodd"/>
            </g>
            <path d="m390.03 250.13c14.098 23.008 28.254 45.988 42.379 68.98 25.555 6.1641 51.102 12.336 76.656 18.496 21.012 5.0625 23.363 12.164 8.125 29.617-16.922 19.375-33.371 39.164-50.062 58.746 1.9648 25.34 3.9023 50.684 5.8984 76.02 2 25.453-5.2148 27.719-22.953 20.508-24.668-10.027-49.23-20.328-73.84-30.492-24.59 10.156-49.266 20.105-73.762 30.461-17.195 7.2695-25.047 7.0391-23.711-11.703 2.0195-28.277 4.3867-56.531 6.5781-84.793-15.84-18.59-31.461-37.367-47.523-55.766-19.242-22.035-18.477-26.668 3.6367-32.125 26.168-6.457 52.398-12.641 78.602-18.965 13.926-22.672 28.016-45.242 41.777-68.012 9.7578-16.133 19.227-15.621 28.199-0.97266z" fillRule="evenodd"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className={ stars>1 ?'active': 'star__svg' } height="100%" version="1.1" viewBox="0 0 752 752">
            <defs>
            <clipPath id="a">
            <path d="m139.21 150h472.79v453h-472.79z"/>
            </clipPath>
            </defs>
            <g clipPath="url(#a)">
            <path d="m407.3 173.45 60.383 98.242 104.29 25.16c14.652 3.5391 37.336 9.1875 39.703 26.219 3.3047 23.781-35.012 58.27-66.379 95.391-26.977 31.922-22.289 17.086-18.992 59.719 11.258 145.81 16.223 141.02-117.19 85.656-39.977-16.586-27.281-17.039-67.191-0.078126-66.102 28.094-96.984 44.988-111.17 36.758-14.625-8.4961-9.2461-44.43-3.2812-119.43 3.6484-45.82 8.125-32.336-17.449-62.586-97.75-115.63-103.72-103.67 41.887-138.53 42.539-10.184 29.707-0.51562 52.617-37.621 12.098-19.602 25.094-43.562 37.062-62.789 22.969-36.902 45.68-38.801 65.707-6.1133zm21.992 79.734c-0.51172-0.82422-29.547-50.52-43.773-70.25-7.1602-9.9414-8.6016-11.719-17.84 0.18359-20.449 26.359-57.297 106.38-71.254 109.75-152.53 36.871-143.76 23.859-116.02 57.055 48.078 57.547 67.477 73.242 72.133 87.258 3.4922 10.516-0.089844 20.094-2.1328 45.695-8.6914 109.25-14.656 101.44 12.789 89.832 131.31-55.512 100.39-52.648 154.73-30.102 114.06 47.336 95.066 61.758 85.445-62.727-4.2344-54.75-10.777-34.664 24.387-76.27 80.484-95.215 90.617-71.969-32.219-101.6-53.871-13-36.391-0.28125-66.238-48.828z" fillRule="evenodd"/>
            </g>
            <path d="m390.03 250.13c14.098 23.008 28.254 45.988 42.379 68.98 25.555 6.1641 51.102 12.336 76.656 18.496 21.012 5.0625 23.363 12.164 8.125 29.617-16.922 19.375-33.371 39.164-50.062 58.746 1.9648 25.34 3.9023 50.684 5.8984 76.02 2 25.453-5.2148 27.719-22.953 20.508-24.668-10.027-49.23-20.328-73.84-30.492-24.59 10.156-49.266 20.105-73.762 30.461-17.195 7.2695-25.047 7.0391-23.711-11.703 2.0195-28.277 4.3867-56.531 6.5781-84.793-15.84-18.59-31.461-37.367-47.523-55.766-19.242-22.035-18.477-26.668 3.6367-32.125 26.168-6.457 52.398-12.641 78.602-18.965 13.926-22.672 28.016-45.242 41.777-68.012 9.7578-16.133 19.227-15.621 28.199-0.97266z" fillRule="evenodd"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className={ stars>2 ?'active': 'star__svg' } height="100%" version="1.1" viewBox="0 0 752 752">
            <defs>
            <clipPath id="a">
            <path d="m139.21 150h472.79v453h-472.79z"/>
            </clipPath>
            </defs>
            <g clipPath="url(#a)">
            <path d="m407.3 173.45 60.383 98.242 104.29 25.16c14.652 3.5391 37.336 9.1875 39.703 26.219 3.3047 23.781-35.012 58.27-66.379 95.391-26.977 31.922-22.289 17.086-18.992 59.719 11.258 145.81 16.223 141.02-117.19 85.656-39.977-16.586-27.281-17.039-67.191-0.078126-66.102 28.094-96.984 44.988-111.17 36.758-14.625-8.4961-9.2461-44.43-3.2812-119.43 3.6484-45.82 8.125-32.336-17.449-62.586-97.75-115.63-103.72-103.67 41.887-138.53 42.539-10.184 29.707-0.51562 52.617-37.621 12.098-19.602 25.094-43.562 37.062-62.789 22.969-36.902 45.68-38.801 65.707-6.1133zm21.992 79.734c-0.51172-0.82422-29.547-50.52-43.773-70.25-7.1602-9.9414-8.6016-11.719-17.84 0.18359-20.449 26.359-57.297 106.38-71.254 109.75-152.53 36.871-143.76 23.859-116.02 57.055 48.078 57.547 67.477 73.242 72.133 87.258 3.4922 10.516-0.089844 20.094-2.1328 45.695-8.6914 109.25-14.656 101.44 12.789 89.832 131.31-55.512 100.39-52.648 154.73-30.102 114.06 47.336 95.066 61.758 85.445-62.727-4.2344-54.75-10.777-34.664 24.387-76.27 80.484-95.215 90.617-71.969-32.219-101.6-53.871-13-36.391-0.28125-66.238-48.828z" fillRule="evenodd"/>
            </g>
            <path d="m390.03 250.13c14.098 23.008 28.254 45.988 42.379 68.98 25.555 6.1641 51.102 12.336 76.656 18.496 21.012 5.0625 23.363 12.164 8.125 29.617-16.922 19.375-33.371 39.164-50.062 58.746 1.9648 25.34 3.9023 50.684 5.8984 76.02 2 25.453-5.2148 27.719-22.953 20.508-24.668-10.027-49.23-20.328-73.84-30.492-24.59 10.156-49.266 20.105-73.762 30.461-17.195 7.2695-25.047 7.0391-23.711-11.703 2.0195-28.277 4.3867-56.531 6.5781-84.793-15.84-18.59-31.461-37.367-47.523-55.766-19.242-22.035-18.477-26.668 3.6367-32.125 26.168-6.457 52.398-12.641 78.602-18.965 13.926-22.672 28.016-45.242 41.777-68.012 9.7578-16.133 19.227-15.621 28.199-0.97266z" fillRule="evenodd"/>
            </svg>
        </div>
    );
}

export default Stars;
