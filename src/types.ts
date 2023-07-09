import { ComponentProps, ElementType } from 'react';
/**
 * T와 K에서 T의 프로퍼티를 제거한 타입을 병합합니다.
 */
declare type Combine<T, K> = T & Omit<K, keyof T>;
/**
 * 원하는 엘리먼트의 프로퍼티와 커스텀 프로퍼티를 병합합니다.
 */
export declare type CombineElementProps<E extends ElementType, P = unknown> = Combine<
  P,
  ComponentProps<E>
>;
/**
 * 원하는 엘리먼트로 렌더링할 수 있는 as 프로퍼티와 커스텀 프로퍼티를 병합합니다.
 */
export declare type OverridableProps<E extends ElementType, P = unknown> = {
  as?: E;
} & CombineElementProps<E, P>;
export {};
