// حفظ البيانات في localStorage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// استرجاع البيانات من localStorage
function loadData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// تهيئة البيانات الأولية إذا لم تكن موجودة
function initializeData() {
    if (!loadData('properties')) {
        const initialProperties = [
            {
                id: 1,
                title: "شقة فاخرة للكراء",
                type: "شقة",
                operation: "كراء",
                price: "50000",
                location: "البليدة، الحي الجديد",
                description: "شقة 3 غرف في الحي الجديد، طابق 3، مساحة 100م²، مطلة على الحدائق.",
                date: "2023-10-15"
            },
            {
                id: 2,
                title: "فيلا للبيع",
                type: "فيلا",
                operation: "بيع",
                price: "25000000",
                location: "البليدة، بوعينان",
                description: "فيلا فاخرة 5 غرف في منطقة هادئة، حديقة خاصة، مساحة 200م².",
                date: "2023-10-14"
            }
        ];
        saveData('properties', initialProperties);
    }
    
    if (!loadData('requests')) {
        saveData('requests', []);
    }
}

// إضافة عقار جديد
function addProperty(property) {
    const properties = loadData('properties') || [];
    property.id = Date.now(); // إنشاء معرف فريد
    property.date = new Date().toISOString().split('T')[0]; // تاريخ اليوم
    properties.push(property);
    saveData('properties', properties);
    return property;
}

// إضافة طلب جديد
function addRequest(request) {
    const requests = loadData('requests') || [];
    request.id = Date.now(); // إنشاء معرف فريد
    request.date = new Date().toISOString().split('T')[0]; // تاريخ اليوم
    request.status = "جديد";
    requests.push(request);
    saveData('requests', requests);
    return request;
}

// الحصول على جميع العقارات
function getProperties() {
    return loadData('properties') || [];
}

// الحصول على جميع الطلبات
function getRequests() {
    return loadData('requests') || [];
}
