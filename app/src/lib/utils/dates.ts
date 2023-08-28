import dayjs from 'dayjs';

export function getStampFromString(stamp:string, format = 'YYYY-MM-DD') {
    return dayjs(stamp).format(format);
}

export function getNow(){
    return dayjs();
}