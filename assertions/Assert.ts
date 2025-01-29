import type { Page } from '@playwright/test';
import { GenericAssertions } from './generic_assertions';

export class Assert extends GenericAssertions {
  constructor(page: Page) {
    super(page);
  }
}
