---
icon: pen-to-square
date: 2022-01-11
category:
  - 跨端
tag:
  - react native
  - 跨端
  
---
# RN是如何渲染UI到NA的

React Native 调用 Android 原生 UI 的过程主要涉及以下几个步骤和关键组件：

### 1. **JavaScript 编写 UI**

在 React Native 中，开发者使用 JavaScript 来编写 UI 组件，通常使用 JSX 语法。例如：

```
jsx复制代码import React from 'react';
import { View, Text, Button } from 'react-native';

const MyComponent = () => (
  <View>
    <Text>Hello, React Native!</Text>
    <Button title="Press Me" onPress={() => alert('Button pressed!')} />
  </View>
);

export default MyComponent;
```

这里的 `View`, `Text`, `Button` 都是 React Native 提供的跨平台组件，它们在 JavaScript 层面定义了 UI 结构。

### 2. **Bridge（桥接）机制**

React Native 使用一个叫做 **Bridge** 的机制在 JavaScript 层和原生层之间进行通信。所有 UI 更新请求最终都会通过这个 Bridge 传递给原生层。

- JavaScript 层在 React 渲染过程中生成虚拟 DOM。
- React Native 会比较新的虚拟 DOM 和上一次的虚拟 DOM，找出变化的部分（diff）。
- 这些变化被打包成一个更新批次，并通过 Bridge 发送到原生层。

### 3. **UI Manager**

原生层有一个称为 **UI Manager** 的模块，它接收来自 JavaScript 层的更新指令。UI Manager 负责：

- 解析来自 JavaScript 的命令。
- 创建、更新、删除原生视图。
- 分发事件给 JavaScript 层（如点击事件等）。

这些命令包括创建新的视图、更新已有视图的属性、删除视图等。UI Manager 是 React Native 在 Android 中负责管理视图生命周期的核心部分。

### 4. **Native Components 映射**

React Native 提供了一些基本的跨平台组件，这些组件在不同的平台上被映射到相应的原生组件。例如：

- `View` 被映射到 Android 的 `ViewGroup`。
- `Text` 被映射到 Android 的 `TextView`。
- `Image` 被映射到 Android 的 `ImageView`。

当 JavaScript 层创建一个 `View` 组件时，React Native 会通过 Bridge 将创建 `View` 的命令传递给原生层的 UI Manager，UI Manager 再调用 Android 的 `ViewGroup` 来创建对应的视图。

### 5. **主线程渲染**

Android 中的所有 UI 操作都必须在主线程（UI Thread）中执行。UI Manager 会确保所有的视图更新操作在主线程中执行。通过这种方式，React Native 将 JavaScript 层的指令翻译成具体的原生 UI 操作，并最终渲染到屏幕上。

### 6. **自定义原生组件**

如果 React Native 提供的组件无法满足需求，开发者还可以编写自己的原生组件。步骤如下：

- **创建原生组件**：在 Android 中创建一个自定义的 View 或者其他 UI 组件。
- **导出到 React Native**：通过创建一个 Java 类，继承 `SimpleViewManager` 或 `ViewGroupManager`，并实现相关方法。这个类负责将原生组件暴露给 React Native。
- **在 JavaScript 中使用**：使用 `requireNativeComponent` 导入自定义组件，然后像使用普通 React Native 组件一样在 JSX 中使用。

例如，一个简单的自定义原生按钮可能这样实现：

```java
public class MyCustomButtonManager extends SimpleViewManager<Button> {
    @Override
    public String getName() {
        return "MyCustomButton";
    }

    @Override
    protected Button createViewInstance(ThemedReactContext reactContext) {
        Button button = new Button(reactContext);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                // 自定义点击事件处理
            }
        });
        return button;
    }
}
```

然后在 JavaScript 中：

```js
import { requireNativeComponent } from 'react-native';

const MyCustomButton = requireNativeComponent('MyCustomButton');

const App = () => (
  <MyCustomButton />
);

export default App;
```

### 7. **事件的回传**

当原生组件中发生事件（例如用户点击了按钮），React Native 会通过桥接机制将这些事件通知 JavaScript 层。JavaScript 层可以注册事件处理函数来处理这些事件。

总结来说，React Native 调用 Android 原生 UI 的过程是通过将 JavaScript 编写的 UI 结构翻译成 Android 原生视图，借助 UI Manager 和 Bridge 机制在主线程中执行渲染操作，并通过事件回调实现与 JavaScript 层的交互。