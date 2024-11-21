// عند النقر على زر "دخول" لفتح القسم المخفي
document.getElementById('showContentBtn').addEventListener('click', function() {
    showContent();  // إظهار المحتوى
});

// عند النقر على زر "رجوع" لإخفاء المحتوى
document.getElementById('backBtn').addEventListener('click', function() {
    hideContent();  // إخفاء المحتوى
});

// دالة لعرض القسم المخفي
function showContent() {
    const contentDiv = document.getElementById('hiddenContent');
    contentDiv.style.display = 'block';  // إظهار القسم المخفي
}

// دالة لإخفاء القسم المخفي
function hideContent() {
    const contentDiv = document.getElementById('hiddenContent');
    contentDiv.style.display = 'none';  // إخفاء القسم المخفي
}

// عند النقر على زر "عرض الإشعار"
document.getElementById('showNotificationBtn').addEventListener('click', function() {
    showNotification('الحافلة ستصل قريباً!');
});

// عند النقر على زر "إخفاء الإشعار"
document.getElementById('hideNotificationBtn').addEventListener('click', function() {
    hideNotification();
});

// دالة لعرض الإشعار
function showNotification(message) {
    const notificationDiv = document.getElementById('notification');
    notificationDiv.innerText = message;
    notificationDiv.style.display = 'block';  // إظهار الإشعار

    // إخفاء الإشعار بعد 5 ثوانٍ
    setTimeout(function() {
        notificationDiv.style.display = 'none';
    }, 5000);
}

// دالة لإخفاء الإشعار فورًا
function hideNotification() {
    const notificationDiv = document.getElementById('notification');
    notificationDiv.style.display = 'none';
}ي وقت الحافلة الثانية (7:30 صباحًا - 3:00 ظهرًا)");
    } else {
        showNotification("لا يوجد حافلات حالياً.");
    }
}

// وضع الظلام (الوضع الليلي) عند التفاعل مع الزر
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}lert("متصفحك لا يدعم ميزة الموقع الجغرافي.");
    }
}

// إعداد التطبيق عند اختيار دور المستخدم
function setupRole(role) {
    userRole = role;
    document.getElementById("role-status").textContent =
        userRole === "student" ? "طالب" : "سائق";
    document.getElementById("role-selection").style.display = "none";
    document.getElementById("map-container").style.display = "block";
    getUserLocation(); // بدء الحصول على الموقع
}

// أحداث الأزرار
document.getElementById("student-role").addEventListener("click", () => {
    setupRole("student");
});

document.getElementById("driver-role").addEventListener("click", () => {
    setupRole("driver");
});