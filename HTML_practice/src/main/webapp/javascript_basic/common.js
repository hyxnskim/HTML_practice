/**
 * 공통 자바스크립트 파일 : js/common.js
 */
// alert("common.js load"); // 연결 확인

/* 현재 날짜 년도4자리-월2자리-일2자리 기본형식의 날짜 반환 함수 */
function getCurrentDate(){
	var currentDate = new Date();;
	var year = currentDate.getFullYear();
	var month = ("0" + (currentDate.getMonth()+1)).slice(-2);
	var date = ("0" + currentDate.getDate()).slice(-2);

	currentDate = year + "-" + month + "-" + date;
	console.log("currentDate = " + currentDate);
	
	return currentDate;
}

/* 현재 시간 시간2자리:분2자리:초2자리 기본형식의 시간 반환 함수 */
function getCurrentTime(){
	var currentDate = new Date();
	
	var hour = ("0" + currentDate.getHours()).slice(-2);
	var min = ("0" + currentDate.getMinutes()).slice(-2);
	var sec = ("0" + currentDate.getSeconds()).slice(-2);
	
	currentDate = hour + ":" + min + ":" + sec;
	return currentDate;
}

function getCurrent(){
	var currentDate = new Date();
	return currentDate;
}

