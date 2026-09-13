document.addEventListener('DOMContentLoaded', () => {
   window.addEventListener('mouseup', () => (isDragging = false));

   const updatePosition = (
      clientX: number,
      container: Element,
      picture: HTMLImageElement,
      handle: HTMLDivElement,
   ) => {
      const rect: DOMRect = container.getBoundingClientRect();

      let position: number = ((clientX - rect.left) / rect.width) * 100;
      position = Math.max(0, Math.min(100, position));

      handle.style.left = `${position}%`;
      picture.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
   };

   const wrappers: Element[] = [
      ...document.querySelectorAll('.compare-wrapper'),
   ];
   let isDragging: boolean = false;

   for (const container of wrappers) {
      const pictureAfter = container.querySelector(
         '.picture-after',
      ) as HTMLImageElement | null;
      const compareHandle = container.querySelector(
         '.compare-handle',
      ) as HTMLDivElement | null;

      if (!pictureAfter || !compareHandle) return;

      pictureAfter.style.clipPath = 'inset(0 50% 0 0)';
      compareHandle.style.left = '50%';

      container.addEventListener('mousedown', (event: Event) => {
         isDragging = true;

         updatePosition(
            (event as MouseEvent).clientX,
            container,
            pictureAfter,
            compareHandle,
         );
      });

      container.addEventListener('mousemove', (event: Event) => {
         if (!isDragging) return;

         updatePosition(
            (event as MouseEvent).clientX,
            container,
            pictureAfter,
            compareHandle,
         );
      });

      container.addEventListener(
         'touchstart',
         (event: Event) => {
            isDragging = true;

            updatePosition(
               (event as TouchEvent).touches[0].clientX,
               container,
               pictureAfter,
               compareHandle,
            );
         },
         { passive: true },
      );

      container.addEventListener(
         'touchmove',
         (event: Event) => {
            if (!isDragging) return;
            event.preventDefault();

            updatePosition(
               (event as TouchEvent).touches[0].clientX,
               container,
               pictureAfter,
               compareHandle,
            );
         },
         { passive: false },
      );

      container.addEventListener('touchend', () => (isDragging = false));
   }
});
