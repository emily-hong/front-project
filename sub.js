import { previewData, allData } from "./data.js";
// TODO js 코드 옮기기
$(function () {
  // 리뷰 목록 (미리보기 목록)
  $.each(previewData, (index, item) => {
    // console.log("index : ", index);
    // console.log("item : ", item);
    $(".review-ul").append(`
        <li class="review-li">
            <div class="reviewer-info">
              <div
                class="reviewer-profile-img"
                style="background-image: url(${item.profileUrl})"
              ></div>
              <div class="reivewer-profile-info">
                <div class="reviewer-name">${item.name}</div>
                <div class="reviewer-rating">★★★★★</div>
              </div>
            </div>
            
            <div class="reviewer-content">
            ${item.review}
            </div>
        </li>
        <div class="hr"></div>
    `);
  });

  // 리뷰 목록 (모두보기 목록)
  $.each(allData, (index, item) => {
    $(".all-review-ul").append(`
      <li class="review-li">
            <div class="reviewer-info">
              <div
                class="reviewer-profile-img"
                style="background-image: url(${item.profileUrl})"
              ></div>
              <div class="reivewer-profile-info">
                <div class="reviewer-name">${item.name}</div>
                <div class="reviewer-rating">★★★★★</div>
              </div>
            </div>
            
            <div class="reviewer-content">
            ${item.review}
            </div>
        </li>
        <div class="hr"></div>
      `);
  });
});
