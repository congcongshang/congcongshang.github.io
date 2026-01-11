// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有代码块容器
    const codeBlocks = document.querySelectorAll('pre code');
    
    codeBlocks.forEach(block => {
        // 获取代码内容并按行分割
        const lines = block.textContent.split('\n');
        // 移除最后一个空行（避免多余行号）
        if (lines[lines.length - 1] === '') lines.pop();
        
        // 创建行号容器
        const lineNumbers = document.createElement('span');
        lineNumbers.className = 'line-numbers';
        
        // 生成行号
        lines.forEach((_, index) => {
            const lineNumber = document.createElement('span');
            lineNumber.textContent = index + 1;
            lineNumbers.appendChild(lineNumber);
        });
        
        // 将行号添加到代码块父元素
        block.parentNode.prepend(lineNumbers);
    });
});