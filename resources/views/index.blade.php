<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel55 vue2.1</title>
</head>
<body>
<div id="app">

</div>
<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('js/vendor.js') }}"></script>
<script src="{{ mix('js/app.js') }}"></script>
{{--说明：你可能在其他教程中看到有的在使用 assets 函数，这两个函数的主要区别就是 assets 函数会直接使用所填路径去 public 文件夹下找文件，而 mix 函数会自动加载带 hash 值的前端资源。这是和 Laravel 前端资源的缓存刷新相关的，如果现在还不明白，不要紧，你记得使用 mix 函数就好了，然后继续往后看。--}}
</body>
</html>