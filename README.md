<img src="https://user-images.githubusercontent.com/101650543/203712970-ad5e5a57-4a0b-4754-a8fb-9d10de58ecaa.png" width="30%"></img>
# 🍴 모랭(모두의 냉장고)
사용자가 보유한 재료를 기반으로 레시피 검색 기능을 제공하고, 조리해 먹은 레시피 기록과 그에 따른 절약 현황 및 가계부 기능을 제공하는 모바일 웹 서비스

# 💭 기획 배경
### 최근 증가하고 있는 1인 가구는..

✔ 외식/배달로 인한 영양 불균형과 낮은 식생활 만족도

✔ 유통기한 내로 사용하지 못해 낭비되는 식재료

✔ 이로 인한 지출 증가와 환경오염

### 그래서 기획하였습니다.

가지고 있는 식재료를 활용해 만들 수 있는 레시피를 추천해 주고, 

해당 레시피에 필요한 조리 비용을 계산하여 외식비와 비교해 주는 기능을 담은 서비스

# 프로젝트 기간
**2022.08.22 ~ 2022.10.07**

# 👪 팀원 소개
|**이름**|**역할**|
|:---:|:---:|
|이나경|팀장, BE, FE, Infra|
|김승준|BE, FE|
|김지건|BE, FE|
|박세원|BE, FE|
|양희경|BE, FE|
|이지영|BE, FE|

# 🍴 핵심 기능

## 1. 검색 기능

### 재료 기반 레시피 검색
재료 키워드를 선택하고, 선택된 재료를 사용하는 레시피를 검색

![재료로검색](https://user-images.githubusercontent.com/101650543/203713447-02c1a669-f4de-46f4-97b0-410cffe0540a.gif)

### 레시피 이름으로 검색
자동완성 기능

![레시피이름으로검색](https://user-images.githubusercontent.com/101650543/203713603-e756f157-a395-41b6-b465-7f90b2eebe7a.gif)

## 2. 조리 비용 VS 외식비 가격 비교

상세 페이지의 재료 태그 선택 시, 활성화 된 재료에 따라 조리 비용이 변화

![재료에따라가격변화](https://user-images.githubusercontent.com/101650543/203713649-5215564c-d7a5-4861-b4f1-d9926ba3ee52.gif)

필요한 식재료 분량에 따라 음식을 조리하는 데 필요한 비용을 계산하고, 똑같은 레시피를 밖에서 사 먹었을 때와 가격을 비교

![조리비외식비비교](https://user-images.githubusercontent.com/101650543/203713655-d1dbd165-f469-4a02-b84e-8aa2c30c0e2a.gif)

## 3. 모랭일기

레시피 상세 페이지에서 조리해 먹은 레시피를 저장

![모랭일기등록](https://user-images.githubusercontent.com/101650543/203713632-49de047f-e042-4aa8-adb9-eb87a7f1e7a5.gif)

주차별/월별로 절약한 금액 내역을 시각화하여 제공

모랭일기 페이지에서 그동안 등록한 레시피 정보를 캘린더에서 확인 가능

![모랭일기그래프레시피](https://user-images.githubusercontent.com/101650543/203713626-a8c39e3f-0fba-4caa-9202-9eae109bb002.gif)

# 🍴 그 외 기능
- 소셜 로그인(KaKao)
- 레시피 찜/최근 본 레시피 조회 기능

# 📃 기능 명세서
![기능명세서1](https://user-images.githubusercontent.com/101650543/203715261-1bdfc898-2a29-45a3-802c-f88608fb9dea.png)
![기능명세서2](https://user-images.githubusercontent.com/101650543/203715270-1d5a508c-86b1-4d93-b2d4-d60a9b593e4d.png)
![기능명세서3](https://user-images.githubusercontent.com/101650543/203715278-1e5c1305-b4ae-49d5-9e7b-4e2eada39e98.png)

# 📃 ERD
![ERDiagram](https://user-images.githubusercontent.com/101650543/203715743-39adc22f-4cb5-48d3-9928-a3be7976260d.png)

# 📃 와이어프레임
![와이어프레임1](https://user-images.githubusercontent.com/101650543/203715767-770c0d69-6067-4443-ab6e-1619c45cff2e.png)
![와이어프레임2](https://user-images.githubusercontent.com/101650543/203715769-404a20d2-7401-4265-ad71-fe03f6905f05.png)

# 📃 컴포넌트 구조도
![컴포넌트구조도](https://user-images.githubusercontent.com/101650543/203715771-c803db8d-8ace-4d70-beb4-957fd661273d.png)

# 💻 개발 환경 및 기술 스택
<div>
<img src="https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
<img src="https://img.shields.io/badge/java-007396?style=for-the-badge&logo=java&logoColor=white">
<img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white">
<img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Apache Hadoop-66CCFF?style=for-the-badge&logo=ApacheHadoop&logoColor=white">
</div>

<div>
<img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white">
<img src="https://img.shields.io/badge/vuetify-1867C0?style=for-the-badge&logo=Vuetify&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
</div>

<div>
<img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
<img src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white">
<img src="https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=NGINX&logoColor=white">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white">
<img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white">
</div>

### 🖱️ 백엔드
- IDE : IntelliJ 2022.2
- JAVA : 8
- Framework : Spring boot 2.7.4
- Build : Gradle 7.5
- WAS : Tomcat
- DBMS : MySql 8.0
- DB API : JPA

### 🖱️ 프론트
- IDE : VS Code 1.70.1
- Framework :
    - Vue2 5.0.8
    - Vuetify  2.6.0
    - Chart.js 3.9.1

### 🖱️ 데이터 정제
- Hadoop
- Python
- JSoup

### 🖱️ 서버
- AWS
- Docker
- Nginx
- Jenkins

### 🖱️ 협업
- Git
- Jira

# 📃 아키텍처 구조
![아키텍쳐구조도](https://user-images.githubusercontent.com/101650543/203715794-32572a3a-e7f7-494d-bda9-bafeb3628a12.png)
