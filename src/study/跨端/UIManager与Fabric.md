---
icon: pen-to-square
date: 2022-01-11
category:
  - 跨端
tag:
  - react native
  - 跨端
---
# UIManager与Fabric
React Native 中的 UI Manager 是一个核心模块，负责将 JavaScript 线程上的 UI 更新请求转换为原生平台上的实际 UI 渲染。它在 React Native 的跨平台架构中扮演着桥梁的角色，确保 JavaScript 代码能够控制原生组件的创建、更新和销毁。

### 1. **UI Manager 的整体架构**

React Native 的架构中，JavaScript 代码与原生代码之间通过 `Bridge` 进行通信。`UI Manager` 位于这个架构的原生部分，主要负责处理来自 JavaScript 的 UI 更新请求。其工作流程主要分为以下几个步骤：

1. **JavaScript 线程**：运行 React Native 的应用逻辑，计算 UI 变化并通过 `Bridge` 发送更新请求。
2. **Bridge**：将 JavaScript 线程上的异步消息传递到原生线程。这些消息通常是关于 UI 操作的，例如创建视图、更新属性、执行动画等。
3. **UI Manager**：在原生线程上接收这些消息并进行处理，最终调用平台特定的 API（如 Android 的 View 系统或 iOS 的 UIKit）来更新 UI。

### 2. **UI Manager 的工作原理**

#### 2.1 **UI 更新的生命周期**

当 JavaScript 代码需要更新 UI 时，它会通过 React 的渲染机制计算出新的 UI 树。这棵树是由虚拟 DOM 表示的，它代表了当前 UI 的状态。React Native 会比较新的虚拟 DOM 树和旧的虚拟 DOM 树，找出差异（称为 `diff`），并生成一系列更新操作。这些操作通过 `Bridge` 传递给 UI Manager。

#### 2.2 **UI Manager 的核心职责**

- **视图的创建与销毁**：UI Manager 接收到创建或销毁视图的命令后，调用原生的 API 来创建或移除对应的原生视图。例如，在 Android 上，UI Manager 会调用 `ViewManager` 来创建一个新的 `View` 对象。
- **属性的更新**：UI Manager 负责将 JavaScript 传递过来的视图属性（如颜色、大小、位置等）映射到原生视图的属性上。例如，改变一个按钮的背景颜色时，UI Manager 会将颜色值传递给原生 `View`，更新它的 `backgroundColor` 属性。
- **布局的计算**：React Native 使用 `Yoga` 作为布局引擎。UI Manager 接收到布局变化的指令后，会调用 `Yoga` 引擎来计算视图的布局，之后将这些布局信息应用到原生视图上。
- **事件的处理**：当原生视图产生事件（如点击事件或滚动事件）时，UI Manager 会捕获这些事件，并通过 `Bridge` 传递给 JavaScript 线程，触发相应的回调函数。

#### 2.3 **异步与批处理**

- **异步处理**：UI Manager 的大部分操作都是异步的。JavaScript 线程与原生线程是分离的，为了避免阻塞 UI 渲染，UI Manager 会将大量操作以批处理的方式异步执行。这意味着 JavaScript 代码发送的一系列更新操作会被收集起来，然后在下一帧统一处理。
- **批处理**：在接收到多个更新请求时，UI Manager 会批量处理这些请求，而不是逐个同步执行。这种批处理机制提高了性能，尤其是在大量 UI 更新的情况下，能够减少 `Bridge` 的通信开销。

#### 2.4 **Shadow Tree 和主 UI 树**

React Native 中引入了 Shadow Tree 的概念，用于表示 JavaScript 中的虚拟 DOM 树。这个 Shadow Tree 由 Yoga 布局引擎计算布局，并生成布局属性（如宽度、高度、位置等）。这些布局属性会传递给主 UI 树，然后由 UI Manager 应用到实际的原生视图上。

### 3. **UI Manager 的平台依赖性**

UI Manager 是一个平台无关的模块，意味着它对 iOS 和 Android 都能起作用。然而，它调用的具体 API 和实现方式是平台相关的：

- **Android 上的实现**：在 Android 上，UI Manager 主要与 `ViewManager` 和 `ViewGroupManager` 协作，这两个类负责管理 Android 的 `View` 层次结构。每个 React Native 组件（如 `TextView`、`ImageView` 等）都对应一个特定的 `ViewManager`，负责处理视图的创建、更新和销毁。
- **iOS 上的实现**：在 iOS 上，UI Manager 通过 `RCTViewManager` 和 `UIView` 系统进行管理。每个 React Native 组件对应一个 `RCTViewManager` 子类，它负责将 React Native 的视图与 UIKit 进行桥接。

### 4. **UI Manager 的优化机制**

React Native 中，UI Manager 为提高性能实现了一些优化机制：

- **减少 Bridge 交互**：通过批处理和异步执行，UI Manager 降低了 JavaScript 和原生层之间的通信频率，从而减少了 `Bridge` 的开销。
- **局部更新**：UI Manager 仅更新发生变化的视图属性，而不是重新渲染整个视图层次结构。这种局部更新机制确保了高效的 UI 渲染。
- **惰性视图创建**：UI Manager 会在实际需要显示某个视图时才创建它，而不是一次性创建整个 UI 树，这种惰性视图创建可以减少内存占用和启动时间。

### 5. **未来的架构改进：Fabric**

React Native 社区正在开发和推进一种新的 UI 管理架构，称为 `Fabric`。Fabric 旨在解决现有 UI Manager 中的一些性能问题和局限性。其核心改进包括：

- **同步渲染**：通过移除 `Bridge` 的异步特性，使得 JavaScript 和原生视图的渲染更加同步，从而提高性能和一致性。
- **直接引用原生视图**：Fabric 允许 JavaScript 代码直接引用原生视图，减少中间层的开销。
- **更好的并发处理**：Fabric 支持并发渲染，使得 React Native 能够更好地处理复杂的 UI 更新场景。

总结来说，UI Manager 是 React Native 中连接 JavaScript 和原生平台的关键模块。它通过异步和批处理的方式，高效地将 JavaScript 中的 UI 更新请求应用到原生视图上。尽管现有架构已经足够强大，React Native 社区仍在通过 Fabric 等项目不断改进和优化这一关键模块，以进一步提升性能和开发体验。



Fabric 已经被正式引入 React Native，并逐步成为新的默认架构。Fabric 是 React Native 团队为解决旧架构中的一些性能和一致性问题而设计的新架构，它对 React Native 的底层渲染机制做出了重大改进。

#### Fabric 的关键改进

1. **同步渲染和并发模式**
   - **同步渲染**：Fabric 支持同步渲染，这意味着 JavaScript 线程和原生代码之间的通信变得更加高效。同步渲染减少了由于异步通信带来的延迟，使得 UI 更新更加及时和流畅。
   - **并发模式**：Fabric 允许 React 进行并发渲染，即在不阻塞主线程的情况下处理多个更新。这种模式有助于提高复杂应用的响应速度和流畅度。
2. **直接操作原生视图**
   - 在旧的 React Native 架构中，JavaScript 代码通过中间层间接地与原生视图交互，而 Fabric 允许 JavaScript 直接操作原生视图。这种改进减少了中间层的开销，使得视图更新更加高效。
3. **跨平台一致性**
   - Fabric 的设计确保了在不同平台（如 iOS 和 Android）之间的行为一致性。它通过标准化 API 和更统一的架构，减少了跨平台开发中的不一致问题。
4. **新架构中的 Layout 计算**
   - Fabric 继续使用 Yoga 引擎来进行布局计算，但它能够更高效地将布局结果应用到原生视图中。这意味着布局更新更快，同时减少了性能开销。
5. **改进的事件处理**
   - Fabric 引入了更优化的事件处理机制，使得事件传递更加直接和高效。通过减少事件从原生层传递到 JavaScript 层的中间步骤，Fabric 提高了事件响应的速度。
6. **更好的内存管理**
   - Fabric 提供了更精细的内存管理，减少了内存泄漏的可能性，同时提升了应用的内存利用效率。

#### Fabric 的实际应用

在新版的 React Native 中，Fabric 已经逐步成为默认架构。开发者可以利用 Fabric 提供的新功能和优化来构建更高性能的应用。由于 Fabric 仍然处于逐步推广阶段，开发者可能需要调整现有代码以适应新架构，特别是涉及到自定义原生模块和与原生交互的部分。

总结来说，Fabric 为 React Native 带来了更高效、更一致的 UI 渲染机制，解决了旧架构中的许多问题，是 React Native 发展中的重要里程碑。如果你正在开发新的 React Native 应用，建议了解并逐步迁移到 Fabric 架构，以充分利用其优势。



它们都负责在 React Native 中管理 UI 的渲染和更新。具体来说，Fabric 可以被视为 UI Manager 的下一代替代品，它继承并改进了 UI Manager 的职责和功能，以解决旧架构中的一些限制和性能问题。

### 6：UI Manager与Fabric 对比

#### 1. **UI Manager 简介**

- **UI Manager** 是旧的 React Native 架构中的核心模块，负责将 JavaScript 层面的 UI 更新请求传递给原生视图进行渲染。
- 它通过 `Bridge` 进行异步通信，将 JavaScript 中的虚拟 DOM 树更新转换为原生视图的操作（如创建、更新和销毁）。
- UI Manager 的工作机制虽然高效，但由于依赖异步通信和 `Bridge`，可能会带来延迟和性能瓶颈，尤其是在复杂场景或高频率的 UI 更新中。

#### 2. **Fabric 的改进和演变**

- **Fabric** 是 React Native 的新一代架构，旨在替代 UI Manager。它不仅保留了 UI Manager 的核心功能，还对性能、架构一致性和开发者体验做出了重大改进。
- Fabric 通过同步渲染、直接操作原生视图、跨平台一致性和改进的事件处理等机制，解决了 UI Manager 中的主要问题。

#### 3. **主要区别与联系**

- **架构演进**：Fabric 是在 UI Manager 的基础上演进而来的。可以说，Fabric 是 UI Manager 的升级版，但它在架构设计上更加现代化，解决了 UI Manager 面临的一些关键挑战。
- **同步 vs. 异步**：UI Manager 主要依赖异步通信，适合处理大量但不要求实时响应的 UI 更新；而 Fabric 支持同步渲染，使得 UI 更新更加及时，尤其适合高交互性应用。
- **性能优化**：Fabric 通过减少 `Bridge` 的使用频率和直接操作原生视图，显著提升了渲染性能和响应速度。
- **跨平台一致性**：Fabric 在设计上更强调跨平台的一致性，减少了开发者在不同平台上处理 UI 问题的复杂度。
- **事件处理和内存管理**：Fabric 改进了事件处理机制和内存管理，使得应用在高负载场景下也能保持流畅和稳定。

### 7. **总结**

UI Manager 和 Fabric 的核心职责是相同的，都是管理 React Native 中的 UI 渲染和更新。但 Fabric 是一个更现代化、优化程度更高的实现，旨在取代 UI Manager，并解决旧架构中的一些根本性问题。随着 React Native 的发展，Fabric 将成为主流架构，开发者可以利用它的优势来构建性能更佳、体验更一致的跨平台应用。