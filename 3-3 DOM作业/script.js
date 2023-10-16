// DOM接口操作HTML文档元素

// 获取页面加载后的事件触发
document.addEventListener('DOMContentLoaded', function () {
    // 通过类名选择元素，用于操作包含十四行诗文本的段落

    // 通过元素类型选择元素，选择视频元素，以便进行后续操作
    const video = document.querySelector('video');

    // 创建一个AbortController，用于处理异步操作的中止
    const controller = new AbortController();

    // 创建一个AbstractRange（抽象范围），用于处理文档范围的操作
    const range = document.createRange();

    // 创建一个DocumentFragment（文档片段），用于在DOM中暂存一组元素
    const fragment = document.createDocumentFragment();

    // 根据环境的可用性，使用TextEncoder进行文本编码
    if (typeof TextEncoder !== 'undefined') {
        const textEncoder = new TextEncoder();
    }

    // 其他元素和操作，例如创建和修改元素内容，修改样式等，也可以在此添加


    // 通过属性选择元素，选择图像元素，以便进行后续操作
    const image = document.querySelector('img[src="image.jpg"]');
    
        // 通过类名选择元素，用于操作包含十四行诗文本的段落
        const sonnetText = document.querySelector('.sonnet-text');

        // 创建一个按钮元素，标题为十四行诗的标题
        const showPoemButton = document.querySelector('#showPoemButton');
        
        // 为按钮添加点击事件监听器
        showPoemButton.addEventListener('click', function () {
            // 显示十四行诗的全文
            sonnetText.style.display = 'block';
    });
});
