const views = {
    introduction: `
        <div class="page-view" id="view-content">
            <h1 class="intro-header">Xin chào, tôi là Phương Bùi.</h1>
            <p class="intro-lead">Một Chuyên viên Marketing đam mê xây dựng thương hiệu và kiến tạo các chiến dịch truyền thông sáng tạo, hướng tới sự gắn kết sâu sắc với khách hàng.</p>
            
            <p>Tôi tin rằng marketing hiệu quả không chỉ là việc bán được sản phẩm, mà là kể một câu chuyện truyền cảm hứng và mang lại giá trị thực sự cho người dùng. Triết lý làm việc của tôi dựa trên sự thấu hiểu dữ liệu kết hợp với tư duy đột phá để tạo ra những thông điệp chạm đến cảm xúc.</p>
            
            <p>Hiện tại, tôi đang tập trung chuyên sâu vào Digital Marketing, Content Strategy và tối ưu hóa tỷ lệ chuyển đổi (CRO) trên các nền tảng số.</p>

            <div class="meta-info">
                <div class="meta-block">
                    <span class="label">Vị trí</span>
                    <span>Hà Nội, Việt Nam</span>
                </div>
                <div class="meta-block">
                    <span class="label">Chuyên môn</span>
                    <span>Digital Marketing, Content Strategy, SEO, Branding</span>
                </div>
                <div class="meta-block">
                    <span class="label">Liên hệ</span>
                    <span><a href="mailto:phuongbui.marketing@example.com">phuongbui.marketing@example.com</a></span>
                </div>
            </div>
        </div>
    `,
    resume: `
        <div class="page-view" id="view-content">
            <h1 class="intro-header">Kinh nghiệm & Học vấn</h1>
            <p class="intro-lead">Hành trình phát triển sự nghiệp và nền tảng kiến thức của tôi trong lĩnh vực Marketing.</p>
            
            <div class="section">
                <span class="label" style="display: block; margin-bottom: 2rem;">Kinh nghiệm làm việc</span>
                
                <div class="item-wrapper resume-item">
                    <div class="mono">2021 — Hiện tại</div>
                    <div>
                        <h3>Senior Marketing Specialist</h3>
                        <p class="mono" style="margin-bottom: 1rem;">TechNova Solutions</p>
                        <p>Dẫn dắt các chiến dịch Digital Marketing tổng thể. Quản lý ngân sách quảng cáo, tối ưu hóa các kênh truyền thông xã hội và tăng trưởng tỷ lệ chuyển đổi khách hàng tiềm năng lên 40% trong năm qua.</p>
                    </div>
                </div>

                <div class="item-wrapper resume-item">
                    <div class="mono">2018 — 2021</div>
                    <div>
                        <h3>Content Marketing Executive</h3>
                        <p class="mono" style="margin-bottom: 1rem;">Creative Agency Group</p>
                        <p>Xây dựng và phát triển nội dung đa nền tảng cho các thương hiệu lớn. Chịu trách nhiệm sáng tạo ý tưởng kịch bản video, bài viết chuẩn SEO và các ấn phẩm truyền thông, giúp tăng 200% lượng traffic tự nhiên cho website khách hàng.</p>
                    </div>
                </div>
                
                <div class="item-wrapper resume-item">
                    <div class="mono">2017 — 2018</div>
                    <div>
                        <h3>Thực tập sinh Marketing</h3>
                        <p class="mono" style="margin-bottom: 1rem;">StartUp Hub VN</p>
                        <p>Hỗ trợ triển khai các sự kiện offline và thu thập, phân tích dữ liệu thị trường. Làm quen với các công cụ đo lường và lên báo cáo hiệu quả chiến dịch hàng tuần.</p>
                    </div>
                </div>
            </div>

            <div class="section">
                <span class="label" style="display: block; margin-bottom: 2rem;">Học vấn</span>
                
                <div class="item-wrapper resume-item">
                    <div class="mono">2014 — 2018</div>
                    <div>
                        <h3>Cử nhân Marketing</h3>
                        <p class="mono" style="margin-bottom: 1rem;">Đại học Kinh tế Quốc dân (NEU)</p>
                        <p>Tốt nghiệp loại Giỏi. Tham gia tổ chức nhiều sự kiện sinh viên và đạt giải cao trong các cuộc thi giải case study về chiến lược tiếp thị.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    portfolio: `
        <div class="page-view" id="view-content">
            <h1 class="intro-header">Dự án tiêu biểu</h1>
            <p class="intro-lead">Một số chiến dịch và dự án Marketing tôi đã trực tiếp tham gia lập kế hoạch và triển khai.</p>

            <div class="portfolio-grid">
                <div class="project-item">
                    <div class="project-img-placeholder">Chiến dịch: "Sống Xanh Cùng Omni"</div>
                    <span class="label">Integrated Campaign</span>
                    <h3 style="margin-top: 0.5rem; margin-bottom: 1rem;">Chiến dịch ra mắt sản phẩm mới</h3>
                    <p>Lên ý tưởng và thực thi chiến dịch truyền thông đa kênh cho dòng sản phẩm thân thiện với môi trường. Kết hợp giữa PR, Social Media và Influencer Marketing, chiến dịch đạt hơn 5 triệu lượt tiếp cận và vượt 150% KPI doanh số.</p>
                </div>

                <div class="project-item">
                    <div class="project-img-placeholder">Dự án: FinTrack Branding</div>
                    <span class="label">Brand Identity & Positioning</span>
                    <h3 style="margin-top: 0.5rem; margin-bottom: 1rem;">Tái định vị thương hiệu FinTrack</h3>
                    <p>Phối hợp cùng đội ngũ thiết kế để làm mới bộ nhận diện thương hiệu và xây dựng cẩm nang thương hiệu (Brand Guidelines). Triển khai chuỗi nội dung tái định vị trên mọi điểm chạm, giúp tăng 60% mức độ nhận biết thương hiệu trong quý đầu.</p>
                </div>
                
                <div class="project-item">
                    <div class="project-img-placeholder">Sự kiện: Tech Innovators 2023</div>
                    <span class="label">Event Management</span>
                    <h3 style="margin-top: 0.5rem; margin-bottom: 1rem;">Hội thảo Công nghệ thường niên</h3>
                    <p>Trưởng ban tổ chức sự kiện với quy mô hơn 1000 khách mời. Chịu trách nhiệm điều phối các đối tác truyền thông, quản lý ngân sách và lên kế hoạch lan tỏa nội dung trước, trong và sau sự kiện.</p>
                </div>
            </div>
        </div>
    `
};

const appContainer = document.getElementById('app');
const navLinks = document.querySelectorAll('.nav-link');

function renderView(hash) {
    const route = hash.replace('#', '') || 'introduction';
    const content = views[route] || views['introduction'];
    
    // Update active nav link
    navLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + route) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Handle fade transition
    const currentView = document.getElementById('view-content');
    if (currentView) {
        currentView.classList.remove('active');
        // Wait for fade out
        setTimeout(() => {
            appContainer.innerHTML = content;
            // Force reflow
            void appContainer.offsetWidth;
            const newView = document.getElementById('view-content');
            if (newView) newView.classList.add('active');
        }, 300); // Should match CSS transition duration (partially)
    } else {
        // Initial render
        appContainer.innerHTML = content;
        setTimeout(() => {
            const newView = document.getElementById('view-content');
            if (newView) newView.classList.add('active');
        }, 50);
    }
}

// Event Listeners
window.addEventListener('hashchange', () => {
    renderView(window.location.hash);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    if (!window.location.hash) {
        window.location.hash = '#introduction';
    } else {
        renderView(window.location.hash);
    }
});
